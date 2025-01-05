import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Url from '@models/Url';

const MONGODB_URI = process.env.MONGODB_URI; // Add this to your .env.local file

// Connect to MongoDB
async function connectDB() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    }
}

// POST handler
export async function POST(request) {
    try {
        await connectDB();

        const { url, keyword } = await request.json();

        // Check if a document with the same keyword exists
        let existingDoc = await Url.findOne({ keyword });
        if (existingDoc) {
            return NextResponse.json({ message: 'Keyword already exists', data: existingDoc });
        }

        // Create a new document
        const newDoc = await Url.create({ url, keyword });
        return NextResponse.json({ message: 'Document created', data: newDoc });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Database Error', details: error.message },
            { status: 500 }
        );
    }
}

import mongoose from 'mongoose';
import Url from '@models/Url';
import { NextResponse } from 'next/server';

const MONGODB_URI = process.env.MONGODB_URI;

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

export async function GET(request, { params }) {
    const url  = (await params).url;
    let redirectUrl = `${process.env.NEXT_PUBLIC_URL}/404`;
    try {
        await connectDB();

        // Check if the document with the keyword exists
        const document = await Url.findOne({ keyword:url });

        redirectUrl = `${document.url}`;

    } catch (error) {
        console.error(error.message);
    } finally {
        return NextResponse.redirect(redirectUrl);
    }
}
import mongoose from "mongoose";

// Define the schema for the Url model
const urlSchema = new mongoose.Schema(
  {
    url: { type: String, required: true }, 
    keyword: { type: String, required: true, unique: true }, 
  },
  { timestamps: true } 
);

// Create the Url model
export default mongoose.models.Url || mongoose.model('Url', urlSchema);

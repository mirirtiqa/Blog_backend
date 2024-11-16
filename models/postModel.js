import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  createdAt: { type: Date, required: true },
  title: String,
  content: String,
  comments: []
});

export default mongoose.model('Post', postSchema);
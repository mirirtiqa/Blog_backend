import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'posts' },
  time: { type: Date, required: true },
  author: String,
  content: String,
  likes: String, 
});

export default mongoose.model('Comment', commentSchema);
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  createdAt: { type: Date },
  title: {type: String, required: true},
  content: {type: String, required: true}, 
  comments: [],
  likes: Number,
});

export default mongoose.model('Post', postSchema);
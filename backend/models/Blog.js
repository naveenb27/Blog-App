import mongoose from 'mongoose';

const blogPost = {
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
};

const blogSchema = new mongoose.Schema(blogPost);
const blogModel = mongoose.model('Blog', blogSchema);

export default blogModel;

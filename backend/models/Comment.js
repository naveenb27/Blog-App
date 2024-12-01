import mongoose from 'mongoose';

const Comment = {
  name: {
    type: String,
    ref: 'User',
  },
  comment: {
    type: String,
    required: true,
  },
  postid: {
    type: String,
    required: true,
  },
};

const commentSchema = mongoose.Schema(Comment);
const CommentModel = mongoose.model('Comment', commentSchema);

export default CommentModel;

import CommentModel from '../models/Comment.js';

const CommentController = async (req, res) => {
  try {
    const { postid, name, comment } = req.body;

    const newComment = await CommentModel({ postid, name, comment });
    await newComment.save();

    res.status(200).json({ message: 'Comment added successfully' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Client error' });
  }
};

export default CommentController;

export const getComments = async (req, res) => {
  try {
    const { postID } = req.params;

    const data = await CommentModel.find({ postid: postID });
    console.log({ postid: postID });
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Client error' });
  }
};

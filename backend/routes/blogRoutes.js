import express from 'express';
import {
  postBlog,
  getBlog,
  getBlogById,
} from '../controller/BlogController.js';
import authenticate from '../middleware/authMiddleware.js';
import CommentController, {
  getComments,
} from '../controller/CommentController.js';

const router = express.Router();

router.post('/post', authenticate, postBlog);
router.get('/getPosts', getBlog);
router.get('/getPosts/:id', getBlogById);
router.post('/comment', authenticate, CommentController);
router.get('/comment/:postID', getComments);

export default router;

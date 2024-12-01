import blogModel from '../models/Blog.js';
import User from '../models/User.js';

export const postBlog = async (req, res) => {
  const { title, description } = req.body;

  try {
    const user = await User.findById(req.userID);
    const auth = user.name;

    const newBlog = new blogModel({ title, description, author: auth });
    await newBlog.save();

    res.status(201).json({ message: 'Blog post created succesfully' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'client error' });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blogs = await blogModel.find();

    res.status(200).json(blogs);
  } catch (e) {
    return res.status(500).json({ message: e.stack });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);
    return res.status(200).json(blog);
  } catch (e) {
    return res.status(500).json({ message: e.stack });
  }
};

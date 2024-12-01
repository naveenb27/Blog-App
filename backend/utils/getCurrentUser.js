import User from '../models/User.js';

const getCurrentUser = async (req, res) => {
  try {
    const userName = await User.findById(req.userID);

    if (!userName) {
      return res.status(404).json({ message: 'User not found. Please login' });
    }

    res.status(200).json(userName);
  } catch (e) {
    res.status(400).json({ message: 'Server error' });
  }
};

export default getCurrentUser;

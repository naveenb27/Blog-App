import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authenticate = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SCRET);
    req.userID = decoded._id;
    next();
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: 'Invalid token' });
  }
};

export default authenticate;

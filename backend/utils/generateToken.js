import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (User) => {
  const generated = jwt.sign(
    {
      _id: User._id,
      name: User.name,
      email: User.email,
    },
    process.env.JWT_SCRET,
    {
      expiresIn: '1d',
    }
  );

  return generated;
};

export default generateToken;

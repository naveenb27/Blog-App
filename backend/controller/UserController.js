import bcrypt from 'bcrypt';
import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const genSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, genSalt);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = generateToken(newUser);

    res.cookie('token', token, {
      maxAge: 2 * 60 * 60 * 24 * 1000,
      httpOnly: true,
      secure: true,
    });

    res.status(201).json({ message: 'user register successfully' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Client error' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res.status(404).json({ message: 'User doesnt exists' });
    }

    const pass = await bcrypt.compare(password, userExists.password);
    if (!pass) {
      return res.status(404).json({ message: 'Wrong password' });
    }
    
    const token = generateToken(userExists);

    res.cookie('token', token, {
      maxAge: 2 * 60 * 60 * 24 * 1000,
      httpOnly: true,
      secure: true,
    });

    return res.status(200).json({ message: 'Successfully logged in' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Client error' });
  }
};

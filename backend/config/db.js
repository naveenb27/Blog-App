import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = () => {
  const connect = async () => {
    try {
      const c = await mongoose.connect(MONGODB_URL);
      console.log('DB connected');
    } catch (e) {
      console.log(e);
    }
  };
  connect();
};

export default connectDB;

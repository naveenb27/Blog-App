import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import errorHandler from './middleware/errorHandler.js';
import authRouter from './routes/authRoutes.js';
import blogRouter from './routes/blogRoutes.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authenticate from './middleware/authMiddleware.js';
import getCurrentUser from './utils/getCurrentUser.js';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

console.log(process.env.CLIENT_URL);
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5174',
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(errorHandler);
app.use(morgan('dev'));
app.use(cookieParser());

app.use('/api/blog', blogRouter);
app.use('/api/auth', authRouter);

app.get('/getCurrentUser', authenticate, getCurrentUser);
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

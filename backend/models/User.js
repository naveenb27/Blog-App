import mongoose from 'mongoose';

const User = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
};

const userSchema = new mongoose.Schema(User);
const userModel = mongoose.model('User', userSchema);

export default userModel;

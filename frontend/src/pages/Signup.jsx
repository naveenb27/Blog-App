import { useNavigate } from 'react-router-dom';
import axiosInstance from '../services/api';
import { useState } from 'react';

const Signup = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({ name: '', email: '', password: '' });

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('api/auth/signup', data);
      console.log(response);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Signup
        </h2>
        <form onSubmit={signupHandler} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              onChange={changeHandler}
              type="text"
              name="name"
              id="name"
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              onChange={changeHandler}
              type="email"
              name="email"
              id="email"
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              onChange={changeHandler}
              type="password"
              name="password"
              id="password"
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Submit
            </button>
            <p>
              Already have an account?{' '}
              <a className="text-blue-600" href="/sign-in">
                Sign-in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

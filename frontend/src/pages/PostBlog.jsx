import { useState } from 'react';
import axiosInstance from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import image from '../assets/images/Blogger-Logo-2016-present.jpg';

const PostBlog = () => {
  const [blog, setBlog] = useState({ title: '', description: '' });

  const navigate = useNavigate();

  const { user } = useAuth();
  const postSubListener = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/api/blog/post', blog);
      console.log(response.data);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  const home = () => {
    navigate('/');
  };

  const changeListener = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  return user ? (
    <div className="flex justify-center">
      <div className="post-container  border border-solid border-[#ccc] rounded-lg my-[50px] px-[15px] py-[20px] w-[80%]">
        {/* <div className="post-container"> */}
        <div className="flex justify-center py-[10px]">
          <img
            onClick={home}
            src={image}
            alt="LOGO"
            className="cursor-pointer h-12"
          />
        </div>
        <form onSubmit={postSubListener}>
          <div className="title flex flex-col mb-6">
            <label htmlFor="title">Title</label>
            <input
              className="border border-solid rounded-lg h-10 px-3"
              placeholder="title"
              onChange={changeListener}
              name="title"
              type="text"
              id="title"
            />
          </div>
          <div className="description flex flex-col mb-6">
            <label htmlFor="description">Description</label>
            <textarea
              className="border border-solid rounded-lg h-96 px-2 py-2"
              placeholder="Breif your content"
              onChange={changeListener}
              name="description"
              type="text"
              id="description"
            />
          </div>
          <div className="btn flex justify-center">
            <button className="border w-[100%] border-solid text-white bg-black border-black px-4 py-1 rounded-md ">
              Submit
            </button>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  ) : (
    <div className='text-center text-3xl'>Sign up (or) login before publish the blog</div>
  );
};

export default PostBlog;

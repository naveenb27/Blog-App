import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../services/api';
import { useAuth } from '../context/AuthContext';
import profile from '../assets/images/profile.webp';

const BlogDetails = () => {
  const { id } = useParams();

  const { user } = useAuth();
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);

  const navigate = useNavigate();

  const [comment, setComment] = useState({
    name: '',
    postid: id,
    comment: '',
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/api/blog/comment', comment);
      console.log(response.data);
      navigate(0);
    } catch (e) {
      console.log(e);
    }
  };

  const onchangeHandler = (e) => {
    setComment({ ...comment, name: user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const getComment = async () => {
      try {
        const com = await axiosInstance.get(`api/blog/comment/${id}`);
        setComments(com.data);
      } catch (e) {
        console.log(e);
      }
    };
    getComment();
  }, []);

  useEffect(() => {
    const blogHandler = async (id) => {
      try {
        const response = await axiosInstance.get(`/api/blog/getPosts/${id}`);
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    blogHandler(id);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3 container border border-solid px-10 py-8 my-4 w-[90%]">
        <div className="title text-4xl">{data.title}</div>
        <div className="flex gap-3 text-sm mb-3">
          <p className="border bg-[#fef2f2] text-[#b91c1c] rounded-md px-3 py-1">
            Author: {data.author}
          </p>
          <p className="border bg-[#eff6ff] text-[#2563eb] rounded-md px-3 py-1">
            Created At: {data.createdAt}
          </p>
        </div>
        <div className="description text-justify mt-2 break-words tracking-wide text-[#444]">
          {'ㅤㅤㅤㅤㅤ'}
          {data.description}
        </div>
        {user ? (
          <div className="mt-3 comment border border-solid border-[#444] flex flex-row gap-4 p-4 rounded-lg shadow-lg">
            <div className="profile">
              <img
                src={profile}
                className="h-[100px] rounded-full object-cover"
                alt="profile"
              />
            </div>
            <form onSubmit={onSubmitHandler} className="w-full">
              <h1 className=" text-xl font-semibold text-blue-600">
                {user}
              </h1>
              <textarea
                name="comment"
                id="comment"
                onChange={onchangeHandler}
                className="w-full h-40 border border-solid border-[#444] rounded-lg p-4 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Write your comment here..."
              />
              <div className="btn mt-4">
                <button
                  type="submit"
                  className="border border-solid border-black text-white bg-black px-6 py-2 rounded-md hover:bg-gray-800 focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="cant-comment text-center text-gray-600 mt-4">
            Sign in first to comment
          </div>
        )}

        <div className="comments">
          <h1 className="text-2xl font-bold mb-6">Comments</h1>
          {comments.map((obj, idx) => (
            <div
              className="comment border border-gray-300 gap-4 p-4 rounded-lg shadow-lg my-4 bg-white hover:shadow-xl transition-shadow duration-300 comment-container"
              key={idx}
            >
              <div className="name text-xl font-semibold text-blue-600">
                {obj.name}
              </div>
              <p className="text-gray-700">{obj.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

import { useEffect, useState } from 'react';
import axiosInstance from '../services/api';
import { useNavigate } from 'react-router-dom';
import img from '../assets/images/online-blog.avif';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const getBlog = async () => {
      try {
        const getPosts = await axiosInstance.get('/api/blog/getPosts');
        setPosts(getPosts.data);
      } catch (e) {
        console.log(e);
      }
    };
    getBlog();
  }, []);

  const blogHandler = async (id) => {
    navigate(`/blog-details/${id}`);
  };

  return (
    <div className="pt-10 px-[6%] text-[#333] min-h-screen">
      {posts.map((obj, idx) => (
        <div
          onClick={() => blogHandler(obj._id)}
          key={idx}
          className="cursor-pointer post-container flex border border-[#ddd] mb-5 justify-between rounded-lg shadow-md hover:shadow-lg overflow-hidden bg-white"
        >
          <div className="right">
            <img
              src={img}
              alt="blog-image"
              className="h-[220px] object-cover"
            />
          </div>
          <div className="left w-[80%] px-4 py-3">
            <h1 className="tracking-tight text-3xl font-bold mb-3 bg-[#4f46e5] text-white rounded-md px-2 py-1">
              {obj.title.charAt(0).toUpperCase() + obj.title.slice(1)}
            </h1>
            <div className="flex gap-3 text-sm mb-3">
              <p className="border bg-[#fef2f2] text-[#b91c1c] rounded-md px-3 py-1">
                {obj.author}
              </p>
              <p className="border bg-[#eff6ff] text-[#2563eb] rounded-md px-3 py-1">
                Created At: {obj.createdAt.slice(0, 10)}
              </p>
            </div>
            <p className="text-[#555] leading-6">
              {obj.description.length > 180
                ? `${obj.description.slice(0, 180)}...`
                : obj.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;

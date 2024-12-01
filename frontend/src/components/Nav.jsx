import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import image from '../assets/images/Blogger-Logo-2016-present.jpg';
const Nav = () => {
  const { user } = useAuth() || false;

  const navigate = useNavigate();

  const signup = () => {
    navigate('/sign-up');
  };

  const home = () => {
    navigate('/');
  };

  const postBlog = () => {
    navigate('/post-blog');
  };
  return (
    <>
      <div className="nav-container-1 bg-black p-2">
        <div className="flex flex-wrap gap-2 items-center justify-around text-white">
          <div>Read blog and win cashprices.</div>
          <div className="nav-li flex list-none gap-12">
            {user ? (
              <li className="-tracking-tighter">{user}</li>
            ) : (
              <li onClick={signup} className="-tracking-tighter">
                SIGN IN
              </li>
            )}
            <li className="-tracking-tighter">FAQs</li>
          </div>
        </div>
      </div>
      <div className="flex justify-around py-3 items-center nav-container-2 border-solid border-gray border-b">
        <div className="logo">
          <img
            onClick={home}
            src={image}
            alt="Logo"
            className="cursor-pointer h-12"
          />
        </div>
        <div className="lists flex gap-10 list-none">
          <li onClick={home}>Home</li>
          {/* <li>Shop</li> */}
          <li onClick={postBlog}>Post blogs</li>
          <li onClick={home}>Blog</li>
          <li>Contacts</li>
        </div>
      </div>
    </>
  );
};

export default Nav;

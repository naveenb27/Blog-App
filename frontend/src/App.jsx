import './App.css';
import Nav from '../src/components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import PostBlog from './pages/PostBlog';
import Signup from './pages/Signup';
import BlogDetails from './pages/BlogDetails';
import Signin from './pages/Singin';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Nav />
                <Blog />
              </div>
            }
          ></Route>
          <Route
            path="/sign-up"
            element={
              <>
                {' '}
                <Nav />
                <Signup />
              </>
            }
          ></Route>
          <Route
            path="/post-blog"
            element={
              <>
                <Nav />
                <PostBlog />
              </>
            }
          ></Route>
          <Route
            path="/blog-details/:id"
            element={
              <>
                <Nav />
                <BlogDetails />
              </>
            }
          ></Route>
          <Route
            path="/sign-in"
            element={
              <>
                <Nav />
                <Signin />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const fetchSinglePostData = async () => {
    const response = await axios.get(`http://localhost:5000/posts/${path}`);
    setPost(response.data);
  };

  useEffect(() => {
    fetchSinglePostData();
  }, [path]);

  return (
    <div className='single-post'>
      <div className='single-post-wrapper'>
        {post.photo && (
          <img className='single-post-image' src={post.photo} alt='' />
        )}
        <h1 className='single-post-title'>
          {post.title}
          <div className='single-post-btn-container'>
            <i className='single-post-icon far fa-edit'></i>
            <i className='single-post-icon far fa-trash-alt'></i>
          </div>
        </h1>
        <div className='single-post-info'>
          <span className='single-post-author'>
            Author:
            <Link to={`/?user=${post.username}`} className='top-link'>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className='single-post-date'>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className='single-post-desc'>{post.desc}</p>
      </div>
    </div>
  );
}

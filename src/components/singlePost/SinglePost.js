import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import "./singlePost.css";

export const PF = "http://localhost:5000/images/";

export default function SinglePost() {
  const {
    user,
    handleDeletePost,
    isUpdate,
    setIsUpdate,
    title,
    desc,
    setTitle,
    setDesc,
    updatePost,
  } = useGlobalContext();
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const fetchSinglePostData = async () => {
    const response = await axios.get(`http://localhost:5000/posts/${path}`);
    setPost(response.data);
    setTitle(response.data.title);
    setDesc(response.data.desc);
  };

  useEffect(() => {
    fetchSinglePostData();
  }, [path]);

  return (
    <div className='single-post'>
      <div className='single-post-wrapper'>
        {post.photo && (
          <img className='single-post-image' src={PF + post.photo} alt='' />
        )}
        {isUpdate ? (
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='single-post-title-input'
            autoFocus
          />
        ) : (
          <h1 className='single-post-title'>
            {title}
            {post.username === user?.username && (
              <div className='single-post-btn-container'>
                <i
                  className='single-post-icon far fa-edit'
                  onClick={() => setIsUpdate(true)}
                ></i>
                <i
                  className='single-post-icon far fa-trash-alt'
                  onClick={() => handleDeletePost(path)}
                ></i>
              </div>
            )}
          </h1>
        )}
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
        {isUpdate ? (
          <textarea
            className='single-post-desc-input'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className='single-post-desc'>{desc}</p>
        )}
        {isUpdate && (
          <button
            className='single-post-button'
            onClick={() => updatePost(path)}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
}

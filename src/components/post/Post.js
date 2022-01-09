import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className='post'>
      {post.photo && <img className='post-img' src={PF + post.photo} alt='' />}
      <div className='post-info'>
        <div className='post-cats'>
          {post.categories.map((category) => {
            return (
              <span key={new Date.getTime().toString()} className='post-cat'>
                {category.name}
              </span>
            );
          })}
        </div>
        <Link to={`/posts/${post._id}`} className='top-link'>
          <span className='post-title'>{post.title}</span>
        </Link>
        <hr />
        <span className='post-date'>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className='post-desc'>{post.desc}</p>
    </div>
  );
}

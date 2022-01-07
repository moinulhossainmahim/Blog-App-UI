import "./Topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className='top'>
      <div className='top-left'>
        <i className='top-icon fab fa-facebook-square'></i>
        <i className='top-icon fab fa-twitter-square'></i>
        <i className='top-icon fab fa-pinterest-square'></i>
        <i className='top-icon fab fa-instagram-square'></i>
      </div>
      <div className='top-center'>
        <div className='top-list'>
          <Link to='/' className='top-link toplist-item'>
            HOME
          </Link>
          <Link to='/' className='top-link toplist-item'>
            ABOUT
          </Link>
          <Link to='/' className='top-link toplist-item'>
            CONTACT
          </Link>
          <Link to='/write' className='top-link toplist-item'>
            WRITE
          </Link>
          <Link to='/' className='top-link toplist-item'>
            LOGOUT
          </Link>
        </div>
      </div>
      <div className='top-right'>
        <Link to='/login' className='top-link top-right-login'>
          LOGIN
        </Link>
        <Link to='/register' className='top-link'>
          REGISTER
        </Link>
        <i className='search-icon fas fa-search'></i>
      </div>
    </div>
  );
}

import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className='register'>
      <span className='register-title'>Register</span>
      <form className='register-form'>
        <label>Username</label>
        <input
          type='text'
          className='register-input'
          placeholder='Enter Your username...'
        />
        <label>Email</label>
        <input
          type='text'
          className='register-input'
          placeholder='Enter Your email...'
        />
        <label>Password</label>
        <input
          type='password'
          className='register-input'
          placeholder='Enter Your Password...'
        />
        <button className='register-btn'>Register</button>
      </form>
      <button className='register-login-btn'>
        <Link to='/login' className='top-link'>
          Login
        </Link>
      </button>
    </div>
  );
}

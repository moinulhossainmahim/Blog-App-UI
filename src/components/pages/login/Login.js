import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className='login'>
      <span className='login-title'>Login</span>
      <form className='login-form'>
        <label>Email</label>
        <input
          type='text'
          className='login-input'
          placeholder='Enter Your email...'
        />
        <label>Password</label>
        <input
          type='password'
          className='login-input'
          placeholder='Enter Your Password...'
        />
        <button className='login-btn'>Login</button>
      </form>
      <button className='login-register-btn'>
        <Link to='/register' className='top-link'>
          Register
        </Link>
      </button>
    </div>
  );
}

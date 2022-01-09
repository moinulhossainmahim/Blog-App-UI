import "./login.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context/context";

export default function Login() {
  const {
    handleSubmit,
    username,
    password,
    setUsername,
    setPassword,
    isFetching,
  } = useGlobalContext();
  return (
    <div className='login'>
      <span className='login-title'>Login</span>
      <form className='login-form' onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type='text'
          className='login-input'
          placeholder='Enter Your username...'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          className='login-input'
          placeholder='Enter Your Password...'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='login-btn' type='submit' disabled={isFetching}>
          Login
        </button>
      </form>
      <button className='login-register-btn'>
        <Link to='/register' className='top-link'>
          Register
        </Link>
      </button>
    </div>
  );
}

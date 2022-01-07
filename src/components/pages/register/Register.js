import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await axios.post("http://localhost:5000/register", {
        username,
        password,
        email,
      });
      response.data && window.location.replace("/login");
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className='register'>
      <span className='register-title'>Register</span>
      <form className='register-form' onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type='text'
          className='register-input'
          placeholder='Enter Your username...'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type='text'
          className='register-input'
          placeholder='Enter Your email...'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          className='register-input'
          placeholder='Enter Your Password...'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='register-btn' type='submit'>
          Register
        </button>
      </form>
      <button className='register-login-btn'>
        <Link to='/login' className='top-link'>
          Login
        </Link>
      </button>
      {error && <span>Something went wrong</span>}
    </div>
  );
}

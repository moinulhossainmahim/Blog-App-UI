import React from "react";
import "./settings.css";
import Sidebar from "./../../sidebar/Sidebar";
import { useGlobalContext } from "../../../context/context";
import { PF } from "../../singlePost/SinglePost";

export default function Setting() {
  const {
    user,
    file,
    setUsername,
    setPassword,
    success,
    setEmail,
    handleUserUpdate,
  } = useGlobalContext();

  return (
    <div className='settings'>
      <div className='settings-wrapper'>
        <div className='settings-title'>
          <span className='settings-update-title'>Update Your Account</span>
          <span className='settings-delete-title'>Delete Account</span>
        </div>
        <form className='settings-form' onSubmit={handleUserUpdate}>
          <label>Profile Picture</label>
          <div className='settings-pp'>
            <img
              className='settings-img'
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=''
            />
            <label htmlFor='file-input'>
              <i className='settings-icon far fa-user-circle'></i>
            </label>
            <input type='file' id='file-input' className='user-input' />
          </div>
          <label>Username</label>
          <input
            type='text'
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type='email'
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='settings-submit' type='submit'>
            Update
          </button>
          {success && (
            <span className='success-msg'>profile has been updated</span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

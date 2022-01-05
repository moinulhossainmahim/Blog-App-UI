import "./settings.css";
import Sidebar from "./../../sidebar/Sidebar";

export default function Setting() {
  return (
    <div className='settings'>
      <div className='settings-wrapper'>
        <div className='settings-title'>
          <span className='settings-update-title'>Update Your Account</span>
          <span className='settings-delete-title'>Delete Account</span>
        </div>
        <form className='settings-form'>
          <label>Profile Picture</label>
          <div className='settings-pp'>
            <img
              className='settings-img'
              src='https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
              alt=''
            />
            <label htmlFor='file-input'>
              <i className='settings-icon far fa-user-circle'></i>
            </label>
            <input type='file' id='file-input' className='user-input' />
          </div>
          <label>Username</label>
          <input type='text' placeholder='safak' />
          <label>Email</label>
          <input type='email' placeholder='safak@gmail.com' />
          <label>Password</label>
          <input type='password' />
          <button className='settings-submit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

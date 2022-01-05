import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar'>
        <div className='sidebar-item'>
          <span className='sidebar-title'>ABOUT ME</span>
          <img
            className='sidebar-img'
            src='https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80'
            alt='sidebar'
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem et
            perferendis pariatur recusandae quam fuga
          </p>
        </div>
        <div className='sidebar-item'>
          <span className='sidebar-title'>CATEGORIES</span>
          <ul className='sidebar-list'>
            <li className='sidebar-list-item'>Life</li>
            <li className='sidebar-list-item'>Music</li>
            <li className='sidebar-list-item'>Style</li>
            <li className='sidebar-list-item'>Sport</li>
            <li className='sidebar-list-item'>Cinema</li>
            <li className='sidebar-list-item'>Tech</li>
          </ul>
        </div>
        <div className='sidebar-item'>
          <span className='sidebar-title'>FOLLOW US</span>
          <div className='sidebar-social'>
            <i className='sidebar-icon top-icon fab fa-facebook-square'></i>
            <i className='sidebar-icon top-icon fab fa-twitter-square'></i>
            <i className='sidebar-icon top-icon fab fa-pinterest-square'></i>
            <i className='sidebar-icon top-icon fab fa-instagram-square'></i>
          </div>
        </div>
      </div>
    </div>
  );
}

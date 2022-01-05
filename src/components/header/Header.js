import "./header.css";

export default function Header() {
  return (
    <div className='header'>
      <div className='header-titles'>
        <span className='header-title-sm'>React & Node</span>
        <span className='header-title-lg'>Blog</span>
      </div>
      <img
        className='header-img'
        src='https://images.unsplash.com/photo-1641155785008-6c02604f3807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80'
        alt='header'
      />
    </div>
  );
}

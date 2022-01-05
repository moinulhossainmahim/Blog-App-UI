import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className='single-post'>
      <div className='single-post-wrapper'>
        <img
          className='single-post-image'
          src='https://media.istockphoto.com/photos/portrait-of-beautiful-tabby-cat-picture-id1291082120'
          alt=''
        />
        <h1 className='single-post-title'>
          Lorem ipsum dolor sit amet.
          <div className='single-post-btn-container'>
            <i className='single-post-icon far fa-edit'></i>
            <i className='single-post-icon far fa-trash-alt'></i>
          </div>
        </h1>
        <div className='single-post-info'>
          <span className='single-post-author'>
            Author: <b>Safak</b>
          </span>
          <span className='single-post-date'>1 hour ago</span>
        </div>
        <p className='single-post-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic
          quibusdam facere neque, et veritatis veniam dolore iste rem in nemo
          mollitia harum at assumenda modi tempore excepturi ab facilis. Quasi
          tempore nobis ut vitae, velit consequatur quibusdam, atque optio harum
          quas quis quisquam facere omnis repudiandae voluptates, asperiores
          libero.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur hic quibusdam facere neque, et veritatis veniam dolore iste
          rem in nemo mollitia harum at assumenda modi tempore excepturi ab
          facilis. Quasi tempore nobis ut vitae, velit consequatur quibusdam,
          atque optio harum quas quis quisquam facere omnis repudiandae
          voluptates, asperiores libero.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Pariatur hic quibusdam facere neque, et veritatis
          veniam dolore iste rem in nemo mollitia harum at assumenda modi
          tempore excepturi ab facilis. Quasi tempore nobis ut vitae, velit
          consequatur quibusdam, atque optio harum quas quis quisquam facere
          omnis repudiandae voluptates, asperiores libero.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Pariatur hic quibusdam facere
          neque, et veritatis veniam dolore iste rem in nemo mollitia harum at
          assumenda modi tempore excepturi ab facilis. Quasi tempore nobis ut
          vitae, velit consequatur quibusdam, atque optio harum quas quis
          quisquam facere omnis repudiandae voluptates, asperiores libero.
        </p>
      </div>
    </div>
  );
}

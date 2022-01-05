import "./write.css";

export default function Write() {
  return (
    <div className='write'>
      <img
        className='write-img'
        src='https://media.istockphoto.com/photos/cute-kitten-licking-glass-table-with-copy-space-picture-id1293763250'
        alt=''
      />
      <form className='write-form'>
        <div className='write-form-group'>
          <label htmlFor='file-input'>
            <i className='write-icon fas fa-plus'></i>
          </label>
          <input type='file' id='file-input' />
          <input
            type='text'
            placeholder='Title'
            className='write-input'
            autoFocus={true}
          />
        </div>
        <div className='write-form-group'>
          <textarea
            placeholder='Tell Your Story...'
            type='text'
            className='write-input write-text'
          ></textarea>
        </div>
        <button className='write-submit'>Publish</button>
      </form>
    </div>
  );
}

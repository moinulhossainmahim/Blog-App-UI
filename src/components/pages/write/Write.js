import { useGlobalContext } from "../../../context/context";
import "./write.css";

export default function Write() {
  const { title, setTitle, desc, setDesc, file, setFile, handleWriteSubmit } =
    useGlobalContext();
  return (
    <div className='write'>
      {file && (
        <img className='write-img' src={URL.createObjectURL(file)} alt='' />
      )}
      <form className='write-form' onSubmit={handleWriteSubmit}>
        <div className='write-form-group'>
          <label htmlFor='file-input'>
            <i className='write-icon fas fa-plus'></i>
          </label>
          <input
            type='file'
            id='file-input'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type='text'
            placeholder='Title'
            className='write-input'
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='write-form-group'>
          <textarea
            placeholder='Tell Your Story...'
            type='text'
            className='write-input write-text'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className='write-submit' type='submit'>
          Publish
        </button>
      </form>
    </div>
  );
}

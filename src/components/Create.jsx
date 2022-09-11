import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../custom-hook/Loading';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, // tell server we're sending json data
      body: JSON.stringify(blog), // convert js object to json string
    }).then(() => {
      setIsPending(false);
      // redirect to home page
      navigate('/');
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={submitHandler}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isPending && <button type="submit">Add Blog</button>}
        {isPending && <Loading />}
      </form>
    </div>
  );
};

export default Create;

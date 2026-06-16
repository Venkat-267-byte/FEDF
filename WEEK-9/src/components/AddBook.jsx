import { useState } from 'react';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !author || !isbn) {
      setMessage('Please fill in all fields.');
      return;
    }

    setMessage(`Book Added Successfully: ${title} by ${author}`);
    setTitle('');
    setAuthor('');
    setIsbn('');
  };

  return (
    <main>
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="form-row">
          <label htmlFor="title">Book Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="isbn">ISBN</label>
          <input
            id="isbn"
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </main>
  );
}

export default AddBook;

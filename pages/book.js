import React from 'react';

function Book() {
  const [books, setBooks] = React.useState([]);
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleAddBook = () => {
    const newBook = {
      title: title,
      author: author,
    };
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
  };

  const containerStyle = {
    maxWidth: '750px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const ulStyle = {
    listStyle: 'none',
    padding: '0',
  };

  const liStyle = {
    marginBottom: '10px',
  };

  const strongStyle = {
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Book List</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={handleAuthorChange}
          style={inputStyle}
        />
        <button onClick={handleAddBook} style={buttonStyle}>
          Add Book
        </button>
      </div>
      <ul style={ulStyle}>
        {books.map((book, index) => (
          <li key={index} style={liStyle}>
            <strong style={strongStyle}>Title:</strong> {book.title},{' '}
            <strong style={strongStyle}>Author:</strong> {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;

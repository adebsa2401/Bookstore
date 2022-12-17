import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import '../styles/BookForm.css';

export default function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = (event) => {
    event.preventDefault();
    dispatch(addBook({
      item_id: new Date().getTime(),
      title,
      author,
      category: 'Action',
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form className="book-form" onSubmit={handleAddBook}>
      <input className="book-title-input" type="text" placeholder="Book title" value={title} onChange={(event) => setTitle(event.target.value)} />
      <input className="book-author-input" type="text" placeholder="Book author" value={author} onChange={(event) => setAuthor(event.target.value)} />
      <button className="btn-primary" type="submit" onClick={handleAddBook}>Add book</button>
    </form>
  );
}

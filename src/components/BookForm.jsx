import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = (event) => {
    event.preventDefault();
    dispatch(addBook({ id: new Date().getTime(), title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleAddBook}>
      <input type="text" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)} />
      <input type="text" placeholder="Author" value={author} onChange={(event) => setAuthor(event.target.value)} />
      <button type="submit" onClick={handleAddBook}>Add book</button>
    </form>
  );
}

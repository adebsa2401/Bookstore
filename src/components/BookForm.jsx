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
  };

  return (
    <form onSubmit={handleAddBook}>
      <input type="text" placeholder="Title" onChange={(event) => setTitle(event.target.value)} />
      <input type="text" placeholder="Author" onChange={(event) => setAuthor(event.target.value)} />
      <button type="submit" onClick={handleAddBook}>Add book</button>
    </form>
  );
}

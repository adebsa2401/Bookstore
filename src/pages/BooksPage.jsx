import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import BookForm from '../components/BookForm';
import List from '../components/List';
import '../styles/BooksPage.css';

export default function BooksPage() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <List className="books-list">
        {books.map((book) => <Book key={book.id} title={book.title} author={book.author} />)}
      </List>

      <hr />

      <h2>Add new book</h2>

      <BookForm />
    </div>
  );
}

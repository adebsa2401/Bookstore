import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import BookForm from '../components/BookForm';
import List from '../components/List';
import { loadBooks } from '../redux/books/books';
import '../styles/BooksPage.css';

const useBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(loadBooks());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return books;
};

export default function BooksPage() {
  const books = useBooks();

  return (
    <div>
      <List className="books-list">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </List>

      <hr />

      <h2>Add new book</h2>

      <BookForm />
    </div>
  );
}

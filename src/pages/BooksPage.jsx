import React from 'react';
import Book from '../components/Book';
import BookForm from '../components/BookForm';
import List from '../components/List';

export default class BooksPage extends React.PureComponent {
  render() {
    return (
      <div>
        <List>
          <Book title="The Hunger Games" author="Suzanne Collins" />
          <Book title="Dune" author="Frank Herbert" />
          <Book title="Capital in the Twenty-First Century" author="Suzanne Collins" />
        </List>

        <hr />

        <h2>Add new book</h2>

        <BookForm />
      </div>
    );
  }
}

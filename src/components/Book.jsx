import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import List from './List';
import '../styles/Book.css';
import { removeBook } from '../redux/books/books';

export default function Book({ id, title, author }) {
  const category = 'Action';
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-card">
      <div className="book-info">
        <h3>{ category }</h3>
        <h2>{ title }</h2>
        <h3>{ author }</h3>

        <List separator={<div className="vertical-separator" />}>
          <button type="button">Comments</button>
          <button type="button" onClick={handleRemoveBook}>Remove</button>
          <button type="button">Edit</button>
        </List>
      </div>

      <div className="progress-container">
        <div className="progress" />
        <div className="progress-percentage">64%</div>
        <div className="progress-text">Completed</div>
      </div>

      <div className="vertical-separator" />

      <div className="current-chapter">
        <h4>Current chapter</h4>
        <h3>Chapter 17</h3>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

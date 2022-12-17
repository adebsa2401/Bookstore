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
        <h3 className="book-category">{ category }</h3>
        <h2 className="book-title">{ title }</h2>
        <h3 className="book-author">{ author }</h3>

        <List className="hr-list" separator={<div className="vertical-separator" />}>
          <button type="button" className="btn-link">Comments</button>
          <button type="button" className="btn-link" onClick={handleRemoveBook}>Remove</button>
          <button type="button" className="btn-link">Edit</button>
        </List>
      </div>

      <div className="progress-container">
        <div className="progress" />
        <div className="progress-percentage">64%</div>
        <div className="progress-text">Completed</div>
      </div>

      <div className="vertical-separator xl-separator" />

      <div className="current-chapter">
        <h4 className="current-chapter-label">Current chapter</h4>
        <h3 className="progress-current-chapter">Chapter 17</h3>
        <button type="button" className="btn-primary">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

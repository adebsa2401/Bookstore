import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import List from './List';
import '../styles/Book.css';

export default function Book({ title, author }) {
  const category = 'Action';

  return (
    <div className="book-card">
      <div className="book-info">
        <h3>{ category }</h3>
        <h2>{ title }</h2>
        <h3>{ author }</h3>

        <List separator={<div className="vertical-separator" />}>
          <Link to="javacript:void(0)">Comments</Link>
          <Link to="javacript:void(0)">Remove</Link>
          <Link to="javacript:void(0)">Edit</Link>
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
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

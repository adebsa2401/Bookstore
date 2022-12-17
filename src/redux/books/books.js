import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const LOAD = 'bookstore/books/LOAD';

const initialState = [];

export const addBook = createAsyncThunk(
  ADD,
  async (payload) => {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/apps/${process.env.REACT_APP_API_ID}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return payload;
    }

    throw new Error('Exception occurred while adding a book');
  },
);

export const removeBook = (payload) => ({
  type: REMOVE,
  payload,
});

export const loadBooks = createAsyncThunk(
  LOAD,
  async () => {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/apps/${process.env.REACT_APP_API_ID}/books`);
    return response.ok ? response.json() : {};
  },
);

export default (state = initialState, action) => {
  const books = [];

  switch (action.type) {
    case `${ADD}/fulfilled`:
      return [...state, action.payload];
    case `${ADD}/rejected`:
      // eslint-disable-next-line no-alert
      alert(action.error.message);
      return state;
    case REMOVE:
      return state.filter((book) => book.id !== action.payload);
    case `${LOAD}/fulfilled`:
      Object.entries(action.payload).forEach(([id, book]) => books.push({ id, ...book[0] }));
      return books;
    case `${LOAD}/rejected`:
      return [];
    default:
      return state;
  }
};

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [
  {
    id: new Date().getTime(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },

  {
    id: new Date().getTime() + 1,
    title: 'Dune',
    author: 'Frank Herbert',
  },

  {
    id: new Date().getTime() + 2,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

export const addBook = (payload) => ({
  type: ADD,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE,
  payload,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

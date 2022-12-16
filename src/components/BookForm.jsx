import React from 'react';

export default function BookForm() {
  return (
    <form>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Author" />
      <button type="submit">Add book</button>
    </form>
  );
}

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function CategoriesPage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" onClick={handleCheckStatus}>Check status</button>
      <h1>{categories}</h1>
    </div>
  );
}

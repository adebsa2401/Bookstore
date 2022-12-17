import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import '../styles/CategoriesPage.css';

export default function CategoriesPage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button className="btn-primary" type="button" onClick={handleCheckStatus}>Check status</button>
      <h1 className="status-label">{categories}</h1>
    </div>
  );
}

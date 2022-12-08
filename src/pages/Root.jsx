import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Avatar from '../images/person-fill.svg';

export default class Root extends React.PureComponent {
  render() {
    return (
      <div>
        <header>
          <h1>Bookstore CMS</h1>
          <nav>
            <Link to="/">Books</Link>
            <Link to="/categories">Categories</Link>
          </nav>
          <img src={Avatar} alt="avatar" />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    );
  }
}

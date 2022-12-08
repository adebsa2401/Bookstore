import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Avatar from '../images/person-fill.svg';
import '../styles/Root.css';

export default class Root extends React.PureComponent {
  render() {
    return (
      <div>
        <header>
          <Link to="/" className="header-logo">Bookstore CMS</Link>
          <nav>
            <Link className="nav-link active" to="/">Books</Link>
            <Link className="nav-link" to="/categories">Categories</Link>
          </nav>
          <img className="profile-avatar" src={Avatar} alt="avatar" />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    );
  }
}

import React from 'react';
import {
  createHashRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import Root from './pages/Root';

export default class App extends React.PureComponent {
  render() {
    const router = createHashRouter(
      createRoutesFromElements(
        <Route path="/" element={<Root />}>
          <Route path="/" element={<BooksPage />} />
        </Route>,
      ),
    );

    return (
      <RouterProvider router={router} />
    );
  }
}

import React from 'react';

import HomePage from './routes/homePage/homePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ListPage from './routes/listPage/listPage';
import Layout from './routes/layout/layout';
import ErrorPage from './routes/errorPage/errorPage';
import Login from './routes/login/login';
import Register from './routes/registerPage/registerPage';
import SinglePage from './routes/singlePage/singlePage';
import ProfilePage from './routes/profilePage/profilePage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,

      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/list',
          element: <ListPage />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/:id',
          element: <SinglePage />,
        },
        {
          path: '/profile',
          element: <ProfilePage />,
        },
        {
          path: '*',
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

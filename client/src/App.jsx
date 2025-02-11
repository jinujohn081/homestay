import React from 'react';

import HomePage from './routes/homePage/homePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ListPage from './routes/listPage/listPage';
import { Layout, RequireAuth } from './routes/layout/layout';
import ErrorPage from './routes/errorPage/errorPage';
import Login from './routes/login/login';
import Register from './routes/registerPage/registerPage';
import SinglePage from './routes/singlePage/singlePage';
import ProfilePage from './routes/profilePage/profilePage';
import NewPostPage from './routes/newPostPage/newPostPage';
import ProfileUpdatePage from './routes/profileUpdatePage/profileUpdatePage';
import {
  listPageLoader,
  singlePageLoader,
  profilePageLoader,
} from './lib/loaders';

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
          loader: listPageLoader,
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
          loader: singlePageLoader,
        },

        {
          path: '*',
          element: <ErrorPage />,
        },
      ],
    },
    {
      path: '/',
      element: <RequireAuth />,
      children: [
        {
          path: '/profile',
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: '/profile/update',
          element: <ProfileUpdatePage />,
        },
        {
          path: '/add',
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

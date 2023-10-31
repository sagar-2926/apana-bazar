import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './View/Home/Home';
import Login from "./View/Login/Login";
import SignUpUser from './View/SignUpUser/SignUpUser';
import "./index.css"
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element:<Home />
  },
  {
    path: '/signup',
    element:<SignUpUser />
  },
  {
    path: '/login',
    element:<Login />
  }
])
root.render(<RouterProvider router={router}/>);

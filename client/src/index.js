import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './View/Home/Home';
import Login from "./View/Login/Login";
import Myorder from './View/Myorder/Myorder';
import SignUpUser from './View/SignUpUser/SignUpUser';
import Buypage from './View/Buypage/Buypage';
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
  },
  {
    path:'/myorder',
    element:<Myorder />
  },
  {
    path:'/buy/:id',
    element:<Buypage/>
  }
])
root.render(<RouterProvider router={router}/>);

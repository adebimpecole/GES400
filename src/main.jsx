import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//pages
import Login from './Authentication Pages/Login.jsx'
import SignUp from './Authentication Pages/SignUp.jsx'
import Home from './Dashboard/Home.jsx'
import Root from './Root.jsx';
import CreateEvent from './Dashboard/CreateEvent'
import Manage from './Dashboard/Manage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Landing Page</div>,
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/dashboard',
    element: <Root/>,
    children: [
      {
        path : '/dashboard',
        element : <Home />
      },
      {
        path : '/dashboard/create',
        element : <CreateEvent />
      },
      {
        path : '/dashboard/manage',
        element : <Manage />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

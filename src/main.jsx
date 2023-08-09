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
import Profile from './Dashboard/Profile'
import Tickets from './Dashboard/Tickets'
import EventPage from './Dashboard/EventPage';
import "./App.css"

//actions
import {createAction, updateUserAction} from './actions/actions'

import { logInAction, signUpAction } from './actions/authenticationActions'
//loaders
import { dashboardLoader, manageLoader, eventLoader } from './actions/loaders';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Landing Page</div>,
  },
  {
    path: '/login',
    element: <Login/>,
    action: logInAction
  },
  {
    path: '/signup',
    element: <SignUp/>,
    action: signUpAction
  },
  {
    path: '/dashboard',
    element: <Root/>,
    loader: dashboardLoader,
    children: [
      {
        path : '/dashboard',
        element : <Home />,
        // loader : homeLoader
      },
      {
        path : '/dashboard/create',
        element : <CreateEvent />,
        action: createAction,
      },
      {
        path : '/dashboard/manage',
        element : <Manage />,
        loader : manageLoader
      },
      {
        path : '/dashboard/profile',
        element : <Profile />,
        action: updateUserAction
      },
      {
        path : '/dashboard/tickets',
        element: <Tickets />
      },
      {
        path : '/dashboard/event/:eventId',
        element: <EventPage />,
        loader: eventLoader
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

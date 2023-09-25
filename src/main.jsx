import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ErrorPage from './assets/ErrorPage.jsx';
import Home from './Components/HomePage/Home.jsx';
import Donation from './Components/Donation/Donation.jsx';
import Statistic from './Components/Statistic/Statistic.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistic",
        element: <Statistic/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
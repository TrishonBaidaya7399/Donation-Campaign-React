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
import DonationDetails from './Components/DonationDetails/DonationDetails.jsx';
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
        element: <Donation></Donation>,
        loader: ()=> fetch('/data.json')
        
      },
      {
        path: "/donation/:id",
        element: <DonationDetails/>,
        loader: ()=> fetch('/data.json'),
      },
      {
        path: "/statistic",
        element: <Statistic/>,
        loader: ()=> fetch('/data.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)

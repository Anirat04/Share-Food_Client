import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Home from './Pages/Home/Home.jsx';
import Details from './Pages/Details/Details.jsx';
import AvailableFoods from './Pages/AvailableFoods/AvailableFoods.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/food/:id",
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:"/available-foods",
        element: <AvailableFoods></AvailableFoods>,
        loader: () => fetch(`http://localhost:5000/services`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

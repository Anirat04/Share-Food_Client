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
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import Provider from './Provider/Provider.jsx';
import MyFoodRequests from './Pages/MyFoodRequests/MyFoodRequests.jsx';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes.jsx';
import AddFood from './Pages/AddFood/AddFood.jsx';
import ManageMyFoods from './Pages/ManageMyFoods/ManageMyFoods.jsx';

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
        path: "/food/:id",
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/available_foods/${params.id}`)
      },
      {
        path: "/available-foods",
        element: <AvailableFoods></AvailableFoods>,
        loader: () => fetch(`http://localhost:5000/available_foods`)
      },
      {
        path: "/add-food",
        element: <AddFood></AddFood>
      },
      {
        path: "/available-foods/login",
        element: <Login></Login>,
      },
      {
        path: "/available-foods/register",
        element: <Register></Register>
      },
      {
        path: "/myFoodRequests",
        element: <PrivateRoutes><MyFoodRequests></MyFoodRequests></PrivateRoutes>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/my-foods",
        element: <PrivateRoutes><ManageMyFoods></ManageMyFoods></PrivateRoutes>
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

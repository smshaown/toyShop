import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pagess/Home/Home";
import Login from "../pagess/Login/Login";
import SignUp from "../pagess/Register/SignUp";
import NotFound from "../pagess/NotFound/NotFound";
import AddToToy from "../pagess/AddToToy/AddToToy";
import AllToys from "../pagess/AllToys/AllToys";
import ToyDetails from "../pagess/ToyDetails/ToyDetails";
import MyDataToy from "../pagess/MyDataToy/MyDataToy";
import Bookings from "../pagess/MyDataToy/Bookings";
import SingleSubDetails from "../pagess/SingleSubDetails/SingleSubDetails";
import UpdateToy from "../pagess/Updated/UpdateToy";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pagess/Blog/Blog";






const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <NotFound />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <SignUp />
        },
        {
          path: '/addToToy',
          element: <PrivateRoute><AddToToy /></PrivateRoute>
        },
        {
          path: '/allToys',
          element:<AllToys />
        },
        {
          path: 'myToys',
          element: <Bookings />

        },      
        {
          path:'toyDetails/:id',
          element: <PrivateRoute><ToyDetails /></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
        },
        {
          path: 'singleToyDetails/:id',
          element: <PrivateRoute><SingleSubDetails /></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
        },
        {
          path: '/updateToy/:id',
          element: <UpdateToy />,
          loader: ({params}) => fetch( `http://localhost:5000/UpdateToys/${params.id}` )
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      
      ]
    },
  ]);


  export default router;
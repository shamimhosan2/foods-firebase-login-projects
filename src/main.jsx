import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Layout from './component/layout/Layout';
import Login from './component/Login/Login';
import Blog from './component/Blog/Blog';
import Contact from './component/contacct/Contact';
import Details from './component/Details/Details';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
     {
      path:'/login',
      element:<Login></Login>
     },
     {
      path:'/blog',
      element:<Blog></Blog>
     },
     {
      path:'/contact',
      element:<Contact></Contact>
     },
     {
      path:'/news',
      element:<Details></Details>
     }
     

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}></RouterProvider>
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar.js';
import ProductPage from './views/ProductPage/ProductPage.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path :"/",
    element:<Home/>
  },
  {
    path:"*",
    element:<h1>404 Not Found</h1>
  },
  {
    path:"/navbar",
    element:<Navbar/>
  },
  {
    path:"/product-page",
    element:<ProductPage/>
  }
 
])
root.render(<RouterProvider router={router}/>);


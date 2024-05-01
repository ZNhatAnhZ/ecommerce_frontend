import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ProductIndex from './pages/ProductIndex.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import CartIndex from './pages/CartIndex.jsx';
import Checkout from './pages/Checkout.jsx';
import axios from 'axios';
import { getAllProducts, getAProduct } from './services/productService.jsx';

axios.defaults.baseURL = "http://localhost:8080";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/products",
    element: <ProductIndex></ProductIndex>,
    loader: () => { return getAllProducts(); }
  },
  ,
  {
    path: "/products/:id",
    element: <ProductDetail></ProductDetail>,
    loader: ({ params }) => { return getAProduct(params.id) }
  },
  ,
  {
    path: "/carts",
    element: <CartIndex></CartIndex>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)

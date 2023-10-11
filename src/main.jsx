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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/products",
    element: <ProductIndex></ProductIndex>,
  },
  ,
  {
    path: "/products/:id",
    element: <ProductDetail></ProductDetail>,
  },
  ,
  {
    path: "/carts",
    element: <CartIndex></CartIndex>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

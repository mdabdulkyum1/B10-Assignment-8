
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from './../pages/Home';
import Statistics from './../pages/Statistics';
import Dashboard from './../pages/Dashboard';
import ProductDetails from "../pages/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import ContactUs from "../pages/ContactUs";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: ()=> fetch('/products.json'),
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path:"statistics",
            element: <Statistics></Statistics>
        },
        {
            path:"dashboard",
            element: <Dashboard></Dashboard>,
            loader: ()=> fetch('/products.json')
        },
        {
          path:"cart/:id",
          element: <ProductDetails></ProductDetails>,
          loader: ()=> fetch('/products.json')
        },
        {
          path:"contact",
          element: <ContactUs></ContactUs>
        }
    ]
  },
  
]);

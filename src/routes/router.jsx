import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Product from "../productroutes/Product";
import Dashboard from "../dashboard/Dashboard";
import Privateroute from "./Privateroute";
import Addproducts from "../sellerroutes/Addproducts";
import Cart from "../buyerroutes/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/products",
        element: <Product></Product>,
      },
      {
        path: "/carts",
        element: <Cart></Cart>
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Privateroute>
        <Dashboard></Dashboard>
      </Privateroute>
    ),
    children: [
      {
        path: "/dashboard/add-new-product",
        element: <Addproducts></Addproducts>,
      },
      
    ],
  },
]);

export default router;

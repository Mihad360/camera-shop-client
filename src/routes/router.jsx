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
import Wishlist from "../buyerroutes/Wishlist";
import SellerProducts from "../sellerroutes/SellerProducts";
import ManageProducts from "../sellerroutes/ManageProducts";
import EditProduct from "../sellerroutes/EditProduct";
import Allusers from "../adminroutes/Allusers";
import AllProducts from "../adminroutes/AllProducts";
import Adminroute from "./Adminroute";
import Sellerroute from "./Sellerroute";

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
        element: <Cart></Cart>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
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
        element: (
          <Sellerroute>
            <Addproducts></Addproducts>
          </Sellerroute>
        ),
      },
      {
        path: "/dashboard/view-added-products",
        element: (
          <Sellerroute>
            <SellerProducts></SellerProducts>
          </Sellerroute>
        ),
      },
      {
        path: "/dashboard/manage-products",
        element: (
          <Sellerroute>
            <ManageProducts></ManageProducts>
          </Sellerroute>
        ),
      },
      {
        path: "/dashboard/all-users",
        element: (
          <Adminroute>
            <Allusers></Allusers>
          </Adminroute>
        ),
      },
      {
        path: "/dashboard/all-seller-products",
        element: (
          <Adminroute>
            <AllProducts></AllProducts>
          </Adminroute>
        ),
      },
      {
        path: "/dashboard/manage-products/edit-product/:id",
        element: (
          <Sellerroute>
            <EditProduct></EditProduct>
          </Sellerroute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);

export default router;

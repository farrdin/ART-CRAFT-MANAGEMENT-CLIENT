import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import AddCrafts from "../Pages/AddCrafts";
import AllCrafts from "../Pages/AllCrafts";
import MyCrafts from "../Pages/MyCrafts";
import Details from "../Pages/Details";
import UpdateCrafts from "../Pages/UpdateCrafts";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Error from "../Components/Error";
import Category from "../Pages/Category";
import Profile from "../Pages/Profile";
import About from "../Pages/About";
import "react-tooltip/dist/react-tooltip.css";
import "react-toastify/dist/ReactToastify.css";
import BlockRoute from "./BlockRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddCrafts></AddCrafts>
          </PrivateRoute>
        ),
      },
      {
        path: "/all",
        element: <AllCrafts></AllCrafts>,
      },
      {
        path: "/my",
        element: (
          <PrivateRoute>
            <MyCrafts></MyCrafts>
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateCrafts></UpdateCrafts>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <BlockRoute>
            <LogIn></LogIn>
          </BlockRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <BlockRoute>
            <Register></Register>
          </BlockRoute>
        ),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;

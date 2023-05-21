import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../error/Error";
import Blogs from "../pages/blogs/Blogs";
import Subjects from "../pages/subjects/Subjects";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/blogs",
            element: <Blogs></Blogs>
        },
        {
            path: "/subjects",
            element: <Subjects></Subjects>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
]);

export default router;
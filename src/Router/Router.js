import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTaskPage from "../Pages/AddTaskPage/AddTaskPage";
import CompletedTaskPage from "../Pages/CompletedTaskPage/CompletedTaskPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Media from "../Pages/Media/Media";
import MyTaskPage from "../Pages/MyTaskPages/MyTaskPage";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main />, children: [
            {
                path: "/", element: <Home/>
            },
            {
                path: "/addtask", element: <PrivateRoute><AddTaskPage/></PrivateRoute>
            },
            {
                path: "/mytask", element: <PrivateRoute> <MyTaskPage/></PrivateRoute>
            },
            {
                path: "/completedtask", element: <PrivateRoute><CompletedTaskPage/></PrivateRoute>
            },
            {
                path :"/login", element: <Login/>
            },
            {
                path: "/signup", element: <Signup/>
            },
            {
                path : "/media", element: <Media/>
            }
        ]
    }
])
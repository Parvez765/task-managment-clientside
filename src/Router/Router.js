import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTaskPage from "../Pages/AddTaskPage/AddTaskPage";
import CompletedTaskPage from "../Pages/CompletedTaskPage/CompletedTaskPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyTaskPage from "../Pages/MyTaskPages/MyTaskPage";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main />, children: [
            {
                path: "/", element: <Home/>
            },
            {
                path: "/addtask", element: <AddTaskPage/>
            },
            {
                path: "/mytask", element: <MyTaskPage/>
            },
            {
                path: "/completedtask", element: <CompletedTaskPage/>
            },
            {
                path :"/login", element: <Login/>
            },
            {
                path: "/signup", element: <Signup/>
            }
        ]
    }
])
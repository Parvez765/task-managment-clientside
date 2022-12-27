import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTaskPage from "../Pages/AddTaskPage/AddTaskPage";
import CompletedTaskPage from "../Pages/CompletedTaskPage/CompletedTaskPage";
import Home from "../Pages/Home/Home";
import MyTaskPage from "../Pages/MyTaskPages/MyTaskPage";

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
            }
        ]
    }
])
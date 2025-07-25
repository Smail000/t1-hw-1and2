import { HomePage } from "@/pages/home";
import { TaskEdit } from "@/pages/task-edit";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
        children: [
            {
                path: "task/:id",
                Component: TaskEdit
            }
        ]
    },
]);

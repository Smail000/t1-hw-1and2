import { Page404 } from "@/pages/404";
import { HomePage } from "@/pages/home";
import { TaskEdit } from "@/pages/task-edit";
import { TaskNew } from "@/pages/task-new";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
        children: [
            {
                path: "task/new",
                Component: TaskNew
            },
            {
                path: "task/:id",
                Component: TaskEdit
            },
            {
                path: "*",
                Component: Page404
            }
        ]
    },
]);

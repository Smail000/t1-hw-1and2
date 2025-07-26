
import { FilterContext } from "@/app/providers/FilterProvider";
import { TaskContext } from "@/app/providers/TaskProvider";
import { filterTasks } from "@/features/task-filter/model";
import { TaskFilter } from "@/features/task-filter/ui";
import { TaskList } from "@/features/task-list/ui/";
import { Title } from "@/shared/ui/typography";
import { useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

export function HomePage() {

    const location = useLocation();
    const navigate = useNavigate();

    const [ tasks, ] = useContext(TaskContext);
    const [ filter, ] = useContext(FilterContext);

    return (
        <div className={`flex flex-col items-center gap-[40px] pt-[80px] pl-[40px] pr-[40px] pb-[40px] ${location.pathname !== "/" && "h-screen overflow-hidden"}`}>
            <Title
                tag="h1"
                weight="semibold"
                size="exlarge"
            >Менеджер задач</Title>
            <TaskFilter />
            <TaskList tasks={filterTasks(tasks, filter)} onEdit={(id) => {
                navigate(`/task/${id}`)
            }} />
            <Outlet />
        </div>
    )
}
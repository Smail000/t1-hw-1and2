
import { useAppDispatch, useAppSelector } from "@/app/store";
import { deleteTask } from "@/entities/task/model/slice";
import { TaskDeleteConfirm } from "@/features/task-delete-confirm/ui";
import { filterTasks } from "@/features/task-filter/model";
import { TaskFilter } from "@/features/task-filter/ui";
import { TaskList } from "@/features/task-list/ui/";
import { Title } from "@/shared/ui/typography";
import { useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

export function HomePage() {

    const location = useLocation(); // Нужен для того, чтобы убрать возможность скролить страницу при pathname !== "/"
    const navigate = useNavigate();

    const tasks = useAppSelector(state => state.tasks.value); // Непосредственно задачи
    const filter = useAppSelector(state => state.filter.value); // Сохраненные фильтры

    // Для удаления задачи
    const dispatchTask = useAppDispatch();

    // Состояние для окна удаления задачи
    const [ showDelete, setShowDelete ] = useState<null | number>(null);

    // Отфильтруем задачи и сохраним до обновления
    const filteredTasks = useMemo(() => filterTasks(tasks, filter), [ tasks, filter ])

    return (
        <div className={`flex flex-col items-center gap-[40px] pt-[80px] pl-[40px] pr-[40px] pb-[40px] ${location.pathname !== "/" || showDelete !== null && "h-screen overflow-hidden"}`}>
            <Title
                tag="h1"
                weight="semibold"
                size="exlarge"
            >Менеджер задач</Title>
            <TaskFilter />
            <TaskList tasks={filteredTasks} onEdit={(id) => {
                navigate(`/task/${id}`)
            }} onDelete={(id) => {
                setShowDelete(id);
            }}/>
            <Outlet />

            {
                showDelete !== null && <TaskDeleteConfirm
                    onConfirm={() => {
                        setShowDelete(null);
                        dispatchTask(deleteTask(showDelete))
                    }}

                    onRefute={() => {
                        setShowDelete(null);
                    }}
                />
            }
        </div>
    )
}
import { TaskContext } from "@/app/providers/TaskProvider"
import type { TaskCategory, TaskPriority, TaskStatus, Task } from "@/entities/task/model/task.types"
import { TaskCategoryArray, TaskPriorityArray, TaskStatusArray } from "@/entities/task/model/tasks"
import { Component404 } from "@/features/404/ui"
import { IconButton } from "@/shared/ui/button"
import { Dropdown } from "@/shared/ui/dropdown"
import { Input } from "@/shared/ui/input"
import { Layout } from "@/shared/ui/layout"
import { Text } from "@/shared/ui/typography"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"

type TaskDetailsProps = {
    id: number
}

export default function TaskDetails({ id }: TaskDetailsProps) {
    const navigate = useNavigate();
    const [ tasks, setTasks ] = useContext(TaskContext);

    // Состояние-флаг, чтобы обозначать отсутствие поля title
    const [ isTitleEmpty, setIsTitleEmpty ] = useState<boolean>(false);

    // Тут помимо поиска такси происходит создание ее полной копии для редактирования
    const [ task, ] = useState<Task | undefined>(() => {
        const initialTask = tasks.find(value => value.id === id);
        if (!initialTask) return undefined;
        
        const newTask = {...initialTask};
        newTask.tags = {...initialTask.tags};
        return newTask;
    });

    // Если таска не нашлась, считается, что ее нет и 404
    if (!task) return (
        <Component404 text="Кажется, такой карточки не существует :\"/>
    )

    return (
        <Layout as="div" color="light" padding="medium" gap="medium" direction="column" className="min-w-[420px]">
            <Input placeholder="Название..." className="w-full" defaultValue={task.title} onChange={(value) => {
                task.title = value;
                if (isTitleEmpty) setIsTitleEmpty(false);
            }}/>

            { isTitleEmpty ? <Text tag="span" size="base" weight="medium">Название нельзя оставлять пустым!</Text> : <></> }

            <Input placeholder="Описание..." className="w-full" defaultValue={task.description} onChange={(value) => {
                task.description = value;
            }}/>
            
            <div className="flex flex-row justify-between w-full items-center">
                <Text tag="span" size="large" weight="medium">Приоритет:</Text>
                <Dropdown title="Приоритет" items={TaskPriorityArray} defaultValue={task.tags.priority} onSwitch={(value) => {
                    task.tags.priority = value as TaskPriority;
                }} disallowNoneValue/>
            </div>
            <div className="flex flex-row justify-between w-full items-center">
                <Text tag="span" size="large" weight="medium">Категория:</Text>
                <Dropdown title="Категория" items={TaskCategoryArray} defaultValue={task.tags.category} onSwitch={(value) => {
                    task.tags.category = value as TaskCategory;
                }} disallowNoneValue/>
            </div>
            <div className="flex flex-row justify-between w-full items-center">
                <Text tag="span" size="large" weight="medium">Статус:</Text>
                <Dropdown title="Статус" items={TaskStatusArray} defaultValue={task.tags.status} onSwitch={(value) => {
                    task.tags.status = value as TaskStatus;
                }} disallowNoneValue/>
            </div>

            <div className="flex flex-row justify-between w-full items-center">
                <IconButton as="X" bgcolor="dark" onClick={() => navigate(-1)}/>
                <IconButton as="Check" bgcolor="dark"onClick={() => {
                    if (!task.title) { // Проверка на пустоту поля title
                        setIsTitleEmpty(true);
                        return;
                    }

                    // Здесь глобальная таска заменяется на локальную с изменениями
                    const initialTaskIndex = tasks.findIndex(value => value.id === id);
                    tasks[initialTaskIndex] = task;
                    setTasks([ ...tasks ]);
                    navigate("/"); // Возвращаемся обратно
                }}/>
            </div>
        </Layout>
    )
}

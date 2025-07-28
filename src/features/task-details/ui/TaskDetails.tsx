import { useAppDispatch, useAppSelector } from "@/app/store"
import { updateTask } from "@/entities/task/model"
import { createTask } from "@/entities/task/model/slice"
import type { TaskCategory, TaskPriority, TaskStatus, Task } from "@/entities/task/model/task.types"
import { initialTask, TaskCategoryArray, TaskPriorityArray, TaskStatusArray } from "@/entities/task/model/tasks"
import { Component404 } from "@/features/404/ui"
import { IconButton } from "@/shared/ui/button"
import { Dropdown } from "@/shared/ui/dropdown"
import { Input } from "@/shared/ui/input"
import { Layout } from "@/shared/ui/layout"
import { Text } from "@/shared/ui/typography"
import { useState } from "react"
import { useNavigate } from "react-router"

type TaskDetailsProps = {
    id: number | null
}

export default function TaskDetails({ id }: TaskDetailsProps) {
    const navigate = useNavigate();

    const tasks = useAppSelector(state => state.tasks.value);
    const dispatchTasks = useAppDispatch();

    // Состояние-флаг, чтобы обозначать отсутствие поля title
    const [ isTitleEmpty, setIsTitleEmpty ] = useState<boolean>(false);

    // Тут помимо поиска такси происходит создание ее полной копии для редактирования
    const [ task, ] = useState<Task | undefined>(() => {
        const task = tasks.find(value => value.id === id) || structuredClone(initialTask);
        if (!task) return undefined;
        return structuredClone(task);
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

                    if (id !== null) {
                        dispatchTasks(updateTask({id, task}));
                    } else {
                        dispatchTasks(createTask(task));
                    }

                    navigate("/");// Возвращаемся обратно
                }}/>
            </div>
        </Layout>
    )
}

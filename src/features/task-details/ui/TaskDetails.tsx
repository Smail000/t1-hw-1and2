import { TaskContext } from "@/app/providers/TaskProvider"
import type { CardCategory, CardPriority, CardStatus, Task } from "@/entities/task/model/task.types"
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

    const [ task, ] = useState<Task | undefined>(() => {
        const initialTask = tasks.find(value => value.id === id)
        if (!initialTask) return undefined;
        
        const newTask = {...initialTask};
        newTask.tags = {...initialTask.tags}
        return newTask
    });

    if (!task) return (
        <Layout as="div" color="light" padding="medium" gap="medium" direction="column" className="items-center">
            <Text tag="span" size="large" weight="medium">Похоже, вы попали на несуществующую страницу :\</Text>
            <IconButton as="X" bgcolor="dark" onClick={() => navigate("/")}/>
        </Layout>
    )

    return (
        <Layout as="div" color="light" padding="medium" gap="medium" direction="column" className="min-w-[420px]">
            <Input placeholder="Название..." className="w-full" defaultValue={task.title} onChange={(value) => {
                task.title = value;
            }}/>
            <Input placeholder="Описание..." className="w-full" defaultValue={task.description} onChange={(value) => {
                task.description = value;
            }}/>
            
            <div className="flex flex-row justify-between w-full items-center">
                <Text tag="span" size="large" weight="medium">Приоритет:</Text>
                <Dropdown title="Приоритет" items={["Low", "Medium", "High"]} defaultValue={task.tags.priority} onSwitch={(value) => {
                    task.tags.priority = value as CardPriority;
                }}/>
            </div>
            <div className="flex flex-row justify-between w-full items-center">
                <Text tag="span" size="large" weight="medium">Категория:</Text>
                <Dropdown title="Категория" items={["Bug", "Feature", "Documentation", "Refactor", "Test"]} defaultValue={task.tags.category} onSwitch={(value) => {
                    task.tags.category = value as CardCategory;
                }}/>
            </div>
            <div className="flex flex-row justify-between w-full items-center">
                <Text tag="span" size="large" weight="medium">Статус:</Text>
                <Dropdown title="Статус" items={["ToDo", "In Progress", "Done"]} defaultValue={task.tags.status} onSwitch={(value) => {
                    task.tags.status = value as CardStatus;
                }}/>
            </div>

            <div className="flex flex-row justify-between w-full items-center">
                <IconButton as="X" bgcolor="dark" onClick={() => navigate(-1)}/>
                <IconButton as="Check" bgcolor="dark"onClick={() => {
                    const initialTaskIndex = tasks.findIndex(value => value.id === id)
                    tasks[initialTaskIndex] = task;
                    setTasks([ ...tasks ])
                    navigate(-1);
                }}/>
            </div>
        </Layout>
    )
}

import { useAppSelector } from "@/app/store"
import type { Task } from "@/entities/task/model/task.types"
import { TaskItem } from "@/features/task-item/ui"
import { Title } from "@/shared/ui/typography"

type TaskListProps = {
    tasks: Task[]
    onEdit: (id: number) => void
    onDelete: (id: number) => void
}

export default function TaskList({ tasks, onEdit, onDelete }: TaskListProps) {
    const filters = useAppSelector(state => state.filter.value);

    return (
        <div className="flex flex-row flex-wrap gap-[20px] max-w-[1300px] justify-center">
            { tasks.map(task => 
                    <TaskItem id={task.id} title={task.title} discription={task.description}
                    chipList={[ task.tags.status, task.tags.category, task.tags.priority ]}
                    onEdit={onEdit} key={task.id} onDelete={onDelete}/>
                )
            }
            {
                !tasks.length && <Title size="medium" tag="h3" weight="medium">
                    {
                        JSON.stringify(filters) === JSON.stringify({}) ?
                        "Кажется задачи кончились... Ты молодец!" :
                        "Задач с такими фильтрами нет"
                    }
                </Title>
            }
        </div>
    )
}

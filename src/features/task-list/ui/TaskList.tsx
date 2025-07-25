import type { Task } from "@/entities/task/model/task.types"
import { TaskItem } from "@/features/task-item/ui"

type TaskListProps = {
    tasks: Task[]
    onEdit: (id: number) => void
}

export default function TaskList({ tasks, onEdit }: TaskListProps) {
    return (
        <div className="flex flex-row flex-wrap gap-[20px]">
            { tasks.map(task => 
                    <TaskItem id={task.id} title={task.title} discription={task.description}
                    chipList={[ task.tags.status, task.tags.category, task.tags.priority ]}
                    onEdit={onEdit} key={task.id}/>
                )
            }
        </div>
    )
}

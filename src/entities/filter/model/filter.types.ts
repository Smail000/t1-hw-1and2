import type { TaskCategory, TaskPriority, TaskStatus } from "@/entities/task/model/task.types"

export type Filter = {
    content?: string
    category?: TaskCategory
    status?: TaskStatus
    priority?: TaskPriority
}

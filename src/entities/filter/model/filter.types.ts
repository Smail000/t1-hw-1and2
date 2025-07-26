import type { TaskCategory, TaskPriority, TaskStatus } from "@/entities/task/model/task.types"

// Предполагается, что если поле существует, то по нему нужно фильтровать
export type Filter = {
    content?: string // title и description
    category?: TaskCategory
    status?: TaskStatus
    priority?: TaskPriority
}

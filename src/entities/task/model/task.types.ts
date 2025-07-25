
export type TaskCategory = "Bug" | "Feature" | "Documentation" | "Refactor" | "Test"
export type TaskStatus = "ToDo" | "In Progress" | "Done"
export type TaskPriority = "Low" | "Medium" | "High"

export type Task = {
	id: number,
	title: string,
	description?: string,
	tags: {
		category: TaskCategory,
		status: TaskStatus,
		priority: TaskPriority
	},
	createdDate: number // timestamp
}
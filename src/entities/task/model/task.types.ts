
export type CardCategory = "Bug" | "Feature" | "Documentation" | "Refactor" | "Test"
export type CardStatus = "ToDo" | "In Progress" | "Done"
export type CardPriority = "Low" | "Medium" | "High"

export type Task = {
	id: number,
	title: string,
	description?: string,
	tags: {
		category: CardCategory,
		status: CardStatus,
		priority: CardPriority
	},
	createdDate: number // timestamp
}
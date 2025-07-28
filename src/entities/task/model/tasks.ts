import type { Task } from "@/entities/task/model/task.types";

export const TaskCategoryArray = [ "Bug", "Feature", "Documentation", "Refactor", "Test" ]
export const TaskStatusArray = [ "ToDo", "In Progress", "Done" ]
export const TaskPriorityArray = [ "Low", "Medium", "High" ]

// По хорошему эти такси нужно загрузить в бд
export const tasks: Task[] = [
    {
        id: 1,
        title: "Реализовать JWT-авторизацию",
        description: "Добавить вход/регистрацию с токенами",
        tags: {
            category: "Feature",
            status: "In Progress",
            priority: "High"
        },
        createdDate: 1719820800000
    },
    {
        id: 2,
        title: "Создать макет главной страницы",
        tags: {
            category: "Feature",
            status: "ToDo",
            priority: "Medium"
        },
        createdDate: 1719907200000
    },
    {
        id: 6,
        title: "Исправить потерю данных при редактировании",
        description: "Баг #42: пропадает описание при сохранении",
        tags: {
            category: "Bug",
            status: "ToDo",
            priority: "High"
        },
        createdDate: 1720252800000 // 2024-07-06
    },
    {
        id: 4,
        title: "Написать тесты для эндпоинтов задач",
        description: "Покрыть 100% кейсов для /api/tasks",
        tags: {
            category: "Test",
            status: "Done",
            priority: "Medium"
        },
        createdDate: 1719993600000 // 2024-07-03
    },
    {
        id: 5,
        title: "Обновить README.md",
        description: "Добавить раздел по настройке среды",
        tags: {
            category: "Documentation",
            status: "ToDo",
            priority: "Low"
        },
        createdDate: 1720080000000
    }
]

export const initialTask: Task = {
    title: "",
    description: "",
    id: 0,
    createdDate: 0,
    tags: {
        category: "Bug",
        priority: "Low",
        status: "ToDo"
    }
}
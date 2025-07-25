
import type { Task } from "@/entities/task/model/taskState";
import { Chip } from "@/entities/task/ui";
import TaskList from "@/features/task-list/ui/TaskList";
import { useResetKey } from "@/shared/lib/hooks";
import { IconButton } from "@/shared/ui/button";
import { Dropdown } from "@/shared/ui/dropdown";
import { Input } from "@/shared/ui/input";
import { Layout } from "@/shared/ui/layout";
import { Title, Text } from "@/shared/ui/typography";

const tasks: Task[] = [
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

export function HomePage() {

    const { key: dropdownKey, trigger: dropdownReset } = useResetKey(); // Для Dropdown
    const { key: inputKey, trigger: inputReset } = useResetKey(); // Для Input

    return (
        <div className="p-[20px] flex flex-col gap-[10px]">
            <Title
                tag="h1"
                weight="semibold"
                size="large"
            >Documentation for some app</Title>
            <Text
                tag="p"
                weight="medium"
                size="base"
            >Тут находиться некоторая текст-рыба для описания задачи, но проблема в том, что описание не несет никакой смысловой нагрузки в данном случае, а вообще она должна быть.</Text>
            <Layout direction="row" padding="base" gap="base" color="light" className="items-center flex-wrap">
                <IconButton as="X" bgcolor="base" />
                <IconButton as="Check" bgcolor="base" />
                <IconButton as="ChevronDown" bgcolor="dark" />
                <IconButton as="ChevronUp" bgcolor="dark" />
                <IconButton as="X" bgcolor="dark" onClick={() => {
                    dropdownReset();
                    inputReset();
                }} />
                <Dropdown title="Приоритет" items={["Low", "Medium", "High"]} className="min-w-[200px]" resetKey={dropdownKey} />
                <Chip as="In Progress" />
                <Input icon="Search" placeholder="Введите текст..." resetKey={inputKey} />
            </Layout>
            <TaskList tasks={tasks} onEdit={(id) => {
                console.log(`Попытка редактировать задачу ${id}`);
            }} />
        </div>
    )
}
// <div className="flex flex-row p-[10px] gap-[10px]">
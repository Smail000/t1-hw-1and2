
import { TaskContext } from "@/app/providers/TaskProvider";
import { Chip } from "@/entities/task/ui";
import { TaskList } from "@/features/task-list/ui/";
import { useResetKey } from "@/shared/lib/hooks";
import { IconButton } from "@/shared/ui/button";
import { Dropdown } from "@/shared/ui/dropdown";
import { Input } from "@/shared/ui/input";
import { Layout } from "@/shared/ui/layout";
import { Title, Text } from "@/shared/ui/typography";
import { useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

export function HomePage() {

    const location = useLocation();
    const navigate = useNavigate();

    const [ tasks, ] = useContext(TaskContext);

    const { key: dropdownKey, trigger: dropdownReset } = useResetKey(); // Для Dropdown
    const { key: inputKey, trigger: inputReset } = useResetKey(); // Для Input

    return (
        <div className={`p-[20px] flex flex-col gap-[10px] ${location.pathname !== "/" && "h-screen overflow-hidden"}`}>
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
                navigate(`/task/${id}`)
            }} />
            <Outlet />
        </div>
    )
}
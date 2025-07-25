import { TaskCategoryArray, TaskPriorityArray, TaskStatusArray } from "@/entities/task/model/tasks";
import { useResetKey } from "@/shared/lib/hooks";
import { IconButton } from "@/shared/ui/button";
import { Dropdown } from "@/shared/ui/dropdown";
import { Input } from "@/shared/ui/input";


export default function TaskFilter() {

    const { key: resetKey, trigger: reset } = useResetKey();

    return (
        <div className="flex flex-row flex-wrap gap-[16px]">
            <Input icon="Search" placeholder="Поиск..." resetKey={resetKey}/>
            <Dropdown title="Приоритет" items={TaskPriorityArray} resetKey={resetKey}/>
            <Dropdown title="Категория" items={TaskCategoryArray} resetKey={resetKey}/>
            <Dropdown title="Статус" items={TaskStatusArray} resetKey={resetKey}/>
            <IconButton bgcolor="dark" as="X" onClick={reset}/>
        </div>
    )
}

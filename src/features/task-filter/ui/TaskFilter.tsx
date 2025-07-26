import { FilterContext } from "@/app/providers/FilterProvider";
import type { TaskCategory, TaskPriority, TaskStatus } from "@/entities/task/model/task.types";
import { TaskCategoryArray, TaskPriorityArray, TaskStatusArray } from "@/entities/task/model/tasks";
import { useResetKey } from "@/shared/lib/hooks";
import { IconButton } from "@/shared/ui/button";
import { Dropdown } from "@/shared/ui/dropdown";
import { noneValue } from "@/shared/ui/dropdown/Dropdown";
import { Input } from "@/shared/ui/input";
import { useContext } from "react";


export default function TaskFilter() {

    const { key: resetKey, trigger: reset } = useResetKey();
    const [ filter, setFilter ] = useContext(FilterContext);

    return (
        <div className="flex flex-row flex-wrap gap-[16px]">
            <Input icon="Search" placeholder="Поиск..." resetKey={resetKey} onChange={value => {
                filter.content = value === noneValue ? undefined : value;
                setFilter({...filter});
            }}/>
            <Dropdown title="Приоритет" items={TaskPriorityArray} resetKey={resetKey} onSwitch={value => {
                filter.priority = value === noneValue ? undefined : value as TaskPriority;
                setFilter({...filter});
            }}/>
            <Dropdown title="Категория" items={TaskCategoryArray} resetKey={resetKey} onSwitch={value => {
                filter.category = value === noneValue ? undefined : value as TaskCategory;
                setFilter({...filter});
            }}/>
            <Dropdown title="Статус" items={TaskStatusArray} resetKey={resetKey} onSwitch={value => {
                filter.status = value === noneValue ? undefined : value as TaskStatus;
                setFilter({...filter});
            }}/>
            <IconButton bgcolor="dark" as="X" onClick={() => {
                setFilter({});
                reset();
            }}/>
        </div>
    )
}

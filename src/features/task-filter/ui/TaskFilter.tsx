import { useAppDispatch, useAppSelector } from "@/app/store";
import { updateFilter } from "@/entities/filter/model/slice";
import type { TaskCategory, TaskPriority, TaskStatus } from "@/entities/task/model/task.types";
import { TaskCategoryArray, TaskPriorityArray, TaskStatusArray } from "@/entities/task/model/tasks";
import { useResetKey } from "@/shared/lib/hooks";
import { IconButton } from "@/shared/ui/button";
import { Dropdown } from "@/shared/ui/dropdown";
import { noneValue } from "@/shared/ui/dropdown/Dropdown";
import { Input } from "@/shared/ui/input";

export default function TaskFilter() {

    const { key: resetKey, trigger: reset } = useResetKey(); // Для сброса всех полей
    
    const filter = useAppSelector(state => state.filter.value);
    const dispatchFilter = useAppDispatch();

    return (
        <div className="flex flex-row flex-wrap gap-[16px]">
            <Input icon="Search" placeholder="Поиск..." resetKey={resetKey} onChange={value => {
                const newFilter = structuredClone(filter);
                newFilter.content = value === noneValue || value === "" ? undefined : value;
                dispatchFilter(updateFilter(newFilter));
            }}/>
            <Dropdown title="Приоритет" items={TaskPriorityArray} resetKey={resetKey} onSwitch={value => {
                const newFilter = structuredClone(filter);
                newFilter.priority = value === noneValue ? undefined : value as TaskPriority;
                dispatchFilter(updateFilter(newFilter));
            }}/>
            <Dropdown title="Категория" items={TaskCategoryArray} resetKey={resetKey} onSwitch={value => {
                const newFilter = structuredClone(filter);
                newFilter.category = value === noneValue ? undefined : value as TaskCategory;
                dispatchFilter(updateFilter(newFilter));
            }}/>
            <Dropdown title="Статус" items={TaskStatusArray} resetKey={resetKey} onSwitch={value => {
                filter.status = value === noneValue ? undefined : value as TaskStatus;
                dispatchFilter(updateFilter({ ...filter }));
            }}/>
            <IconButton bgcolor="dark" as="X" onClick={() => {
                dispatchFilter(updateFilter({}));
                reset();
            }}/>
        </div>
    )
}

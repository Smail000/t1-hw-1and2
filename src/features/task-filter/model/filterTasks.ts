import type { Filter } from "@/entities/filter/model";
import type { Task } from "@/entities/task/model/task.types";

/*
    Фильтрация работает следующим образом:
    Если какой то из параметров фильтрации указан, то
    такси по нему фильтруются. Поле content фильтрует
    по title и description сразу (чтобы хотя бы в одном было совпадение)
*/

export default function filterTasks(tasks: Task[], filter: Filter): Task[] {
    return tasks.filter(task => {
        if (filter.content && 
            !( task.title.toLocaleLowerCase().includes(filter.content.toLocaleLowerCase()) ||
            task.description && task.description.toLocaleLowerCase().includes(filter.content.toLocaleLowerCase()))) return false;
        if (filter.category && task.tags.category !== filter.category) return false;
        if (filter.priority && task.tags.priority !== filter.priority) return false;
        if (filter.status && task.tags.status !== filter.status) return false;
        return true;
    })
}

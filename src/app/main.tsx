import './index.css'

import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { TaskContext } from '@/app/providers/TaskProvider'
import { tasks as defaultTasks } from '@/entities/task/model/tasks'
import { router } from '@/app/router/routes'
import { RouterProvider } from 'react-router'
import { FilterContext } from '@/app/providers/FilterProvider'
import type { Filter } from '@/entities/filter/model'

export function EntryPoint() {

    const [ tasks, setTasks ] = useState(defaultTasks);
    const [ filter, setFilter ] = useState<Filter>({});

    return (
        <StrictMode>
            <TaskContext value={[tasks, setTasks]}>
                <FilterContext value={[filter, setFilter]}>
                    <RouterProvider router={router} />
                </FilterContext>
            </TaskContext>
        </StrictMode>
    )
}

createRoot(document.getElementById('root')!).render(<EntryPoint />)

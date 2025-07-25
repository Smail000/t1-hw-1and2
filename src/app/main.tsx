import './index.css'

import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { TaskContext } from '@/app/providers/TaskProvider'
import { tasks as defaultTasks } from '@/entities/task/model/tasks'
import { router } from '@/app/router/routes'
import { RouterProvider } from 'react-router'

export function EntryPoint() {

    const [ tasks, setTasks ] = useState(defaultTasks);

    return (
        <StrictMode>
            <TaskContext value={[tasks, setTasks]}>
            <RouterProvider router={router} />
            </TaskContext>
        </StrictMode>
    )
}

createRoot(document.getElementById('root')!).render(<EntryPoint />)

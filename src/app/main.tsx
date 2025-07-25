import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TaskContext } from '@/app/providers/TaskProvider'
import { tasks } from '@/entities/task/model/tasks'
import { router } from '@/app/router/routes'
import { RouterProvider } from 'react-router'

export function EntryPoint() {
    return (
        <StrictMode>
            <TaskContext value={tasks}>
            <RouterProvider router={router} />
            </TaskContext>
        </StrictMode>
    )
}

createRoot(document.getElementById('root')!).render(<EntryPoint />)

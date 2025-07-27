
import './index.css'
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { TaskContext } from '@/app/providers/TaskProvider'
import { tasks as defaultTasks } from '@/entities/task/model/tasks'
import { router } from '@/app/router/routes'
import { RouterProvider } from 'react-router'
import type { Task } from '@/entities/task/model/task.types'
import { Provider } from 'react-redux'
import { store } from '@/app/store'

export function EntryPoint() {

    const [ tasks, setTasks ] = useState<Task[]>(defaultTasks);

    return (
        <StrictMode>
            <Provider store={store}>
                <TaskContext value={[tasks, setTasks]}>
                    <RouterProvider router={router} />
                </TaskContext>
            </Provider>
        </StrictMode>
    )
}

createRoot(document.getElementById('root')!).render(<EntryPoint />)

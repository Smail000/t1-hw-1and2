import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HomePage } from '@/pages/home'
import { TaskContext } from '@/app/providers/TaskProvider'
import { tasks } from '@/entities/task/model/tasks'

export function EntryPoint() {
    return (
        <StrictMode>
            <TaskContext value={tasks}>
                <HomePage />
            </TaskContext>
        </StrictMode>
    )
}

createRoot(document.getElementById('root')!).render(<EntryPoint />)

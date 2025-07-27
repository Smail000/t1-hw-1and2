
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from '@/app/router/routes'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import { store } from '@/app/store'

export function EntryPoint() {
    return (
        <StrictMode>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </StrictMode>
    )
}

createRoot(document.getElementById('root')!).render(<EntryPoint />)

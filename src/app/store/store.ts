import { filterReducer } from '@/entities/filter/model';
import { tasksReducer } from '@/entities/task/model';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        tasks: tasksReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { filterReducer } from '@/entities/filter/model';
import { tasksReducer } from '@/entities/task/model';
import { storageKey } from '@/entities/task/model/slice';
import { saveState } from '@/shared/lib/storage/localStorage';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        tasks: tasksReducer
    },
});

// Сохраняем задачи при обновлении состояния
store.subscribe(() => {
    saveState(storageKey, store.getState().tasks.value)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
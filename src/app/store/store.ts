import { filterReducer } from '@/entities/filter/model';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import type { Task } from '@/entities/task/model/task.types';
import { tasks } from '@/entities/task/model/tasks';
import { loadState } from '@/shared/lib/storage/localStorage';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface TaskState {
    value: Task[];
}

export const storageKey = "TaskManagerT1HW";

const initialState: TaskState = {
    value: loadState(storageKey) || tasks,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        updateTask: (state, action: PayloadAction<{ id: number, task: Task }>) => {
            const initialTaskIndex = state.value.findIndex(value => value.id === action.payload.id);
            state.value[initialTaskIndex] = action.payload.task;
        },

        deleteTask: (state, action: PayloadAction<number>) => {
            state.value = state.value.filter(task => task.id !== action.payload)
        },

        createTask: (state, action: PayloadAction<Task>) => {
            const newId = Date.now();
            action.payload.id = newId;
            action.payload.createdDate = Date.now();
            state.value.unshift(action.payload);
        },
    },
});

export const { updateTask, deleteTask, createTask } = counterSlice.actions;
export default counterSlice.reducer;
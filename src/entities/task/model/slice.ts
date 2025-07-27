
import type { Task } from '@/entities/task/model/task.types';
import { tasks } from '@/entities/task/model/tasks';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface TaskState {
    value: Task[];
}

const initialState: TaskState = {
    value: tasks,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        updateTask: (state, action: PayloadAction<{ id: number, task: Task }>) => {
            const initialTaskIndex = state.value.findIndex(value => value.id === action.payload.id);
            state.value[initialTaskIndex] = action.payload.task;
        },
    },
});

export const { updateTask } = counterSlice.actions;
export default counterSlice.reducer;
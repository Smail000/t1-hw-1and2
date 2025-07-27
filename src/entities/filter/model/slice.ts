import type { Filter } from './filter.types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    value: Filter;
}

const initialState: FilterState = {
    value: {},
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<Filter>) => {
            state.value = action.payload;
        },
    },
});

export const { update } = counterSlice.actions;
export default counterSlice.reducer;
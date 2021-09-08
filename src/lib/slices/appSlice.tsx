import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface IApp {
  value: number,
  mode: boolean,
}

const initialState: IApp = {
  value: 0,
  mode: false,
};

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    modeChange: (state, action: PayloadAction<boolean>) => {
      state.mode = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  modeChange,
} = counterSlice.actions;

export const selectCount = (state: RootState): number => state.counter.value;

export default counterSlice.reducer;

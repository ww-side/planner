import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITimerState {
  time: number;
  running: boolean;
  intervalActive: boolean;
}

const initialState: ITimerState = {
  time: 0,
  running: false,
  intervalActive: false,
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },
    setRunning: (state, action: PayloadAction<boolean>) => {
      state.running = action.payload;
    },
    setIntervalActive: (state, action: PayloadAction<boolean>) => {
      state.intervalActive = action.payload;
    },
  },
});

export default timerSlice.reducer;

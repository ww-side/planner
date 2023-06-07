import { createSlice } from '@reduxjs/toolkit';

export const headerSlice = createSlice({
  name: 'header',
  initialState: false,
  reducers: {
    setMenuActive: (_, action) => action.payload,
  },
});

export default headerSlice.reducer;

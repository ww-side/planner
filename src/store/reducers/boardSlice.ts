import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBoardState, ICard } from '../../types/data.types.ts';

const initialState: IBoardState = {
  card: '',
  cards: [],
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<string>) => {
      state.card = action.payload;
    },
    setCards: (state, action: PayloadAction<ICard[]>) => {
      state.cards = action.payload;
    },
    addCard: (state, action: PayloadAction<ICard>) => {
      state.cards.push(action.payload);
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      state.cards = state.cards.filter(item => item.id !== action.payload);
    },
  },
});

export default boardSlice.reducer;

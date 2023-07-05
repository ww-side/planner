import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../../interfaces/card.ts';

interface IBoardState {
  card: string;
  cards: Card[];
}

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
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      state.cards = state.cards.filter(item => item.id !== action.payload);
    },
  },
});

export default boardSlice.reducer;

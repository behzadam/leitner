import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Flashcard } from '@ui/types';

type State = {
  cards: Flashcard[];
};

const initialState: State = {
  cards: [
    {
      id: 1,
      front: 'Front card 1',
      back: 'Back card 1',
      isReady: true,
    },
    {
      id: 2,
      front: 'Front card 2',
      back: 'Back card 2',
      isReady: true,
    },
    {
      id: 3,
      front: 'Front card 3',
      back: 'Back card 3',
      isReady: true,
    },
    {
      id: 4,
      front: 'Front card 4',
      back: 'Back card 4',
      isReady: true,
    },
    {
      id: 5,
      front: 'Front card 5',
      back: 'Back card 5',
      isReady: true,
    },
    {
      id: 6,
      front: 'Front card 6',
      back: 'Back card 6',
      isReady: true,
    },
    {
      id: 7,
      front: 'Front card 7',
      back: 'Back card 7',
      isReady: true,
    },
    {
      id: 8,
      front: 'Front card 8',
      back: 'Back card 8',
      isReady: true,
    },
    {
      id: 9,
      front: 'Front card 9',
      back: 'Back card 9',
      isReady: true,
    },
  ],
};

const quizSlice = createSlice({
  name: 'quizSlice',
  initialState,
  reducers: {
    onFlipped(state: State, action: PayloadAction<Flashcard>) {
      console.log('onSwiped', state?.cards.length);
    },

    onSwiped(state: State, action: PayloadAction<number>) {
      const index = state.cards.findIndex(
        ({ id }) => id === action.payload
      );
      state.cards[index].isReady = !state.cards[index].isReady;
    },
  },
});

export const { onFlipped, onSwiped } = quizSlice.actions;
export default quizSlice.reducer;

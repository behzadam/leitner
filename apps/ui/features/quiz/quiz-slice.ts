import {
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '@ui/store/index';
import { Flashcard } from '@ui/types';
import { SwipeProps } from './quiz-types';

type QuizState = {
  cards: Flashcard[];
};

const initialState: QuizState = {
  cards: [
    {
      id: 1,
      front: 'Front card 1',
      back: 'Back card 1',
      remembered: false,
    },
    {
      id: 2,
      front: 'Front card 2',
      back: 'Back card 2',
      remembered: false,
    },
    {
      id: 3,
      front: 'Front card 3',
      back: 'Back card 3',
      remembered: true,
    },
    {
      id: 4,
      front: 'Front card 4',
      back: 'Back card 4',
      remembered: true,
    },
    {
      id: 5,
      front: 'Front card 5',
      back: 'Back card 5',
      remembered: true,
    },
    {
      id: 6,
      front: 'Front card 6',
      back: 'Back card 6',
      remembered: true,
    },
    {
      id: 7,
      front: 'Front card 7',
      back: 'Back card 7',
      remembered: true,
    },
    {
      id: 8,
      front: 'Front card 8',
      back: 'Back card 8',
      remembered: true,
    },
    {
      id: 9,
      front: 'Front card 9',
      back: 'Back card 9',
      remembered: true,
    },
  ],
};

const quizSlice = createSlice({
  name: 'quizSlice',
  initialState,
  reducers: {
    onFlipped(state: QuizState) {
      console.log('onFlipped');
    },

    onSwiped(state: QuizState, action: PayloadAction<SwipeProps>) {
      // TODO: should update database
      console.log('onSwiped');
    },
  },
});

export const selectFlashcards = (state: RootState): Flashcard[] =>
  state.quiz.cards;

export const selectUnrememberedFlashcards = createSelector(
  selectFlashcards,
  (cards): Flashcard[] => {
    return cards.filter((item) => item.remembered === false);
  }
);

export const { onFlipped, onSwiped } = quizSlice.actions;
export default quizSlice.reducer;

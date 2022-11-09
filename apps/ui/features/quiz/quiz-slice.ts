import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@ui/store/index';
import { Flashcard } from '@ui/types';

type QuizState = {
  cards: Flashcard[];
  currentIndex: number;
};

const initialState: QuizState = {
  cards: [
    {
      id: 1,
      front: 'Front card 1',
      back: 'Back card 1',
      remembered: false,
      flipped: false,
    },
    {
      id: 2,
      front: 'Front card 2',
      back: 'Back card 2',
      remembered: false,
      flipped: false,
    },
    {
      id: 3,
      front: 'Front card 3',
      back: 'Back card 3',
      remembered: true,
      flipped: false,
    },
    {
      id: 4,
      front: 'Front card 4',
      back: 'Back card 4',
      remembered: true,
      flipped: false,
    },
    {
      id: 5,
      front: 'Front card 5',
      back: 'Back card 5',
      remembered: true,
      flipped: false,
    },
    {
      id: 6,
      front: 'Front card 6',
      back: 'Back card 6',
      remembered: true,
      flipped: false,
    },
    {
      id: 7,
      front: 'Front card 7',
      back: 'Back card 7',
      remembered: true,
      flipped: false,
    },
    {
      id: 8,
      front: 'Front card 8',
      back: 'Back card 8',
      remembered: true,
      flipped: false,
    },
    {
      id: 9,
      front: 'Front card 9',
      back: 'Back card 9',
      remembered: true,
      flipped: false,
    },
  ],
  currentIndex: 0,
};

const quizSlice = createSlice({
  name: 'quizSlice',
  initialState,
  reducers: {
    cardFlipped(state: QuizState): void {
      state.cards[state.currentIndex].flipped =
        !state.cards[state.currentIndex].flipped;
    },

    cardSwiped(state: QuizState): void {
      if (state.currentIndex < state.cards.length) {
        state.currentIndex++;
      }
    },
  },
});

const selectState = (state: RootState) => state;

export const selectFlashcards = createSelector(
  selectState,
  (state: RootState) => state.quiz.cards
);

export const selectCurrentIndex = createSelector(
  selectState,
  (state: RootState) => state.quiz.currentIndex
);

export const selectFlashcardsCount = createSelector(
  selectFlashcards,
  (cards: Flashcard[]) => cards.length
);

export const { cardFlipped, cardSwiped } = quizSlice.actions;
export default quizSlice.reducer;

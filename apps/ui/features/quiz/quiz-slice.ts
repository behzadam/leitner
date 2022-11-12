import {
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '@ui/store/index';
import { Flashcard } from '@ui/types';
import { SwipeDirection } from './quiz-types';

type RememeberedCounts = {
  yesCount: number;
  noCount: number;
};

type QuizState = {
  cards: Flashcard[];
  currentIndex: number;
  rememebered: RememeberedCounts;
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
  rememebered: {
    yesCount: 0,
    noCount: 0,
  },
};

const quizSlice = createSlice({
  name: 'quizSlice',
  initialState,
  reducers: {
    cardFlipped(state: QuizState): void {
      state.cards[state.currentIndex].flipped =
        !state.cards[state.currentIndex].flipped;
    },

    cardSwiped(
      state: QuizState,
      action: PayloadAction<SwipeDirection>
    ): void {
      if (state.currentIndex < state.cards.length) {
        state.currentIndex++;
      }

      if (action.payload === 'left') {
        state.rememebered.yesCount++;
      }

      if (action.payload === 'right') {
        state.rememebered.noCount++;
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

export const selectRememeberedCount = createSelector(
  selectState,
  (state: RootState): RememeberedCounts => state.quiz.rememebered
);

export const { cardFlipped, cardSwiped } = quizSlice.actions;
export default quizSlice.reducer;

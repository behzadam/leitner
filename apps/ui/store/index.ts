import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '@ui/features/quiz/quiz-slice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import flashcardReducer from '@/features/flashcard/FlashcardSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { flashcards: flashcardReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

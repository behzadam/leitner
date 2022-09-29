import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

import { NotificationReducer } from '@ui/features/notification/notificationSlice';
import { configureStore } from '@reduxjs/toolkit';
import { ThunkExtraArguments } from '@ui/types';
import dialogConfirmSlice from '@ui/components/dialog/dialogConfirmSlice';
import flashcardReducer from '@ui/features/flashcard/flashcardSlice';

const thunkArguments = {} as ThunkExtraArguments;
const customizeMiddleware = () => {
  return {
    thunk: {
      extraArgument: thunkArguments,
    },
  };
};
export const store = configureStore({
  reducer: {
    flashcards: flashcardReducer,
    notification: NotificationReducer,
    dialogConfirm: dialogConfirmSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(customizeMiddleware()),
});

thunkArguments.store = store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;

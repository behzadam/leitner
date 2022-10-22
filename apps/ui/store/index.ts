import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { NotificationReducer } from '@ui/features/notification/notificationSlice';

export const store = configureStore({
  reducer: {
    notification: NotificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;

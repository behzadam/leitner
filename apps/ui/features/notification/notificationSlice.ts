import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type vertical = 'top' | 'bottom';
type horizontal = 'left' | 'right' | 'center';

export interface NotificationState {
  open?: boolean;
  message: string;
  timeout?: number | null;
  vertical?: vertical;
  horizontal?: horizontal;
}

export const notificationInitialState: NotificationState = {
  open: false,
  message: '',
  timeout: 2000,
  vertical: 'bottom',
  horizontal: 'center',
};

export const NotificationSlice = createSlice({
  name: 'notification',
  initialState: notificationInitialState,
  reducers: {
    showNotification: (
      _state,
      action: PayloadAction<NotificationState>
    ) => ({
      ...notificationInitialState,
      ...action.payload,
      open: true,
    }),
    hideNotification: (state) => ({ ...state, open: false }),
  },
});

export const NotificationActions = NotificationSlice.actions;
export const NotificationReducer = NotificationSlice.reducer;

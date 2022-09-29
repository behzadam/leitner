import { createSlice } from '@reduxjs/toolkit';

export type DialogConfirmState = {
  isOpened: boolean;
  isConfirmed: boolean;
  isDeclined: boolean;
};

export const initialState: DialogConfirmState = {
  isOpened: false,
  isConfirmed: false,
  isDeclined: false,
};

const dialogConfirmSlice = createSlice({
  name: 'dialogConfirm',
  initialState: initialState,
  reducers: {
    open() {
      return { ...initialState, isOpened: true };
    },
    confirm() {
      return { ...initialState, isOpened: false, isConfirmed: true };
    },
    decline() {
      return { ...initialState, isOpened: false, isDeclined: true };
    },
  },
});

export const dialogConfirmSliceActions = dialogConfirmSlice.actions;
export default dialogConfirmSlice.reducer;

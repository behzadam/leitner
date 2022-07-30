import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FlashcardState {
  list: any[];
}

const initialState: FlashcardState = {
  list: [],
};

const FlashcardSlice = createSlice({
  name: 'FlashcardSlice',
  initialState,
  reducers: {
    setList: (state: FlashcardState, action: PayloadAction<any[]>) => {
      state.list = action.payload;
    },
  },
});

export const { setList } = FlashcardSlice.actions;
export default FlashcardSlice;

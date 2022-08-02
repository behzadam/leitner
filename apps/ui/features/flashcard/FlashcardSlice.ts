import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFlashcards = createAsyncThunk('fetchFlashcards', async () => {
  const response = await axios.get('/flashcards');
  return response.data;
});

export type FlashcardState = {
  items: any[];
};

export const initialState: FlashcardState = {
  items: [],
};

const flashcardSlice = createSlice({
  name: 'FlashcardSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFlashcards.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
  reducers: undefined,
});

export default flashcardSlice.reducer;

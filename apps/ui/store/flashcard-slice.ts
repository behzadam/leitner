import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export type FlashcardState = {
  flashcards: any[];
  isLoading: boolean;
};

export const initialState: FlashcardState = {
  flashcards: [],
  isLoading: false,
};

export const fetchFlashcards = createAsyncThunk('fetchFlashcards', async () => {
  const response = await axios.get('/flashcards');
  return response.data;
});

const flashcardSlice = createSlice({
  name: 'FlashcardSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFlashcards.fulfilled, (state, action) => {
      state.isLoading = true;
      state.flashcards = action.payload;
      state.isLoading = false;
    });
  },
  reducers: undefined,
});

export default flashcardSlice.reducer;

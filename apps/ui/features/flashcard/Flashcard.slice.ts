import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFlashcards = createAsyncThunk(
  'flashcard/fetchFlashcards',
  async () => {
    const response = await axios.get('/flashcards');
    return response.data;
  }
);

export const createFlashcard = createAsyncThunk(
  'flashcard/createFlashcard',
  async (params: any) => {
    const response = await axios.post('/flashcards', params);
    return response.data;
  }
);

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
    builder
      .addCase(fetchFlashcards.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(createFlashcard.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
  reducers: undefined,
});

export default flashcardSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type FlashcardState = {
  flashcards: any[];
  isLoading: boolean;
};

const initialState: FlashcardState = {
  flashcards: [],
  isLoading: false,
};

export const fetchFlashcards = createAsyncThunk('fetchFlashcards', async () => {
  const response = await axios.get('/flashcards');
  return response.data;
});

const FlashcardSlice = createSlice({
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

const { reducer } = FlashcardSlice;
export default reducer;

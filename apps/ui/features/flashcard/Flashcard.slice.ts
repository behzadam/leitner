import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from './Flashcard.api';

export const fetchFlashcards = createAsyncThunk(
  'flashcard/fetchFlashcards',
  async () => {
    const response = await axios.get('/flashcards');
    return response.data;
  }
);

export const fetchFlashcardById = createAsyncThunk(
  'flashcard/fetchFlashcardById',
  async (id: number) => {
    const response = await api.fetchFlashcardById(id);
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

export const deleteFlashcard = createAsyncThunk(
  'flashcard/deleteFlashcard',
  async (id: number) => {
    const item = await api.fetchFlashcardById(id);
    if (!item.data) return;
    await axios.delete(`/flashcards/${id}`);
    return id;
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
      })
      .addCase(deleteFlashcard.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          ({ id }) => id === action.payload
        );
        if (index < 0) return;
        state.items.splice(index, 1);
      });
  },
  reducers: undefined,
});

export default flashcardSlice.reducer;

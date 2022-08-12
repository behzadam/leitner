import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Flashcard, PaginatedDto } from '@shared/types';
import axios from 'axios';
import * as api from './Flashcard.api';

export const fetchFlashcards = createAsyncThunk(
  'flashcard/fetchFlashcards',
  async () => {
    const response = await api.fetchFlashcards();
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

export const updateFlashcard = createAsyncThunk(
  'flashcard/updateFlashcard',
  async (params: any) => {
    // TODO: should ckeck if data is existing
    const response = await api.updateFlashcard(params);
    return response.data;
  }
);

export type FlashcardState = {
  items: Flashcard[];
};

export const initialState: FlashcardState = {
  items: [],
};

const flashcardSlice = createSlice({
  name: 'FlashcardSlice',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchFlashcards.fulfilled,
        (state, action: PayloadAction<PaginatedDto<Flashcard>>) => {
          state.items = action.payload.items;
        }
      )
      .addCase(createFlashcard.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteFlashcard.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          ({ id }) => id === action.payload
        );
        if (index < 0) return;
        state.items.splice(index, 1);
      })
      .addCase(updateFlashcard.fulfilled, (state, action) => {
        const { id, word, translate, description } = action.payload;
        console.log(
          'addCase',
          id,
          word,
          translate,
          description,
          action.payload
        );
        // state.items = state.items.map((item) => {
        //   if (item.id === action.payload.id) {
        //     const { word, translate, description } =
        //     item = { ...item, ...action.payload };
        //   }
        // });
      });
  },
  reducers: undefined,
});

export default flashcardSlice.reducer;

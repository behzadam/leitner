import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit';
import { FlashcardListItemDto, PaginatedDto } from '@shared/types';
import axios from 'axios';
import { ApiStatus } from '@ui/types';
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
  async (params: any, { dispatch }) => {
    const response = await axios.post('/flashcards', params);
    dispatch(fetchFlashcards());
    return response.data;
  }
);

export const deleteFlashcard = createAsyncThunk(
  'flashcard/deleteFlashcard',
  async (id: number, { dispatch }) => {
    const item = await api.fetchFlashcardById(id);
    if (!item.data) return;
    await axios.delete(`/flashcards/${id}`);
    dispatch(fetchFlashcards());
  }
);

export const updateFlashcard = createAsyncThunk(
  'flashcard/updateFlashcard',
  async (params: any, { dispatch }) => {
    // TODO: should ckeck if data is existing
    await api.updateFlashcard(params);
    dispatch(fetchFlashcards());
  }
);

export type FlashcardState = {
  flashcards: PaginatedDto<FlashcardListItemDto>;
  fetchFlashcardsStatus: ApiStatus;
};

export const initialState: FlashcardState = {
  flashcards: {
    items: [],
    meta: {
      currentPage: 1,
      itemCount: 0,
      itemsPerPage: 10,
      totalItems: 0,
      totalPages: 1,
    },
    links: {
      first: '',
      last: '',
      next: '',
      previous: '',
    },
  },
  fetchFlashcardsStatus: 'IDLE',
};

const flashcardSlice = createSlice({
  name: 'FlashcardSlice',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchFlashcards.fulfilled,
        (
          state,
          action: PayloadAction<PaginatedDto<FlashcardListItemDto>>
        ) => {
          state.fetchFlashcardsStatus = 'SUCCEEDED';
          state.flashcards = action.payload;
        }
      )
      .addCase(fetchFlashcards.pending, (state) => {
        state.fetchFlashcardsStatus = 'PENDING';
      })
      .addCase(fetchFlashcards.rejected, (state) => {
        state.fetchFlashcardsStatus = 'FAILED';
      });
  },
  reducers: undefined,
});

export default flashcardSlice.reducer;

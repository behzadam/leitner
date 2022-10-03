import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit';
import { FlashcardListItemDto, PaginatedDto } from '@shared/types';
import axios from 'axios';
import { ApiStatus } from '@ui/types';
import * as api from './api/Flashcard.api';

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

export const fetchFlashcardHistory = createAsyncThunk(
  'flashcard/fetchFlashcardHistory',
  async (id: number) => {
    const response = await api.fetchFlashcardHistory(id);
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
  flashcardHistory: FlashcardListItemDto[];
  status: ApiStatus;
};

const defaultFlashcards: PaginatedDto<FlashcardListItemDto> = {
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
};

export const initialState: FlashcardState = {
  flashcards: { ...defaultFlashcards },
  flashcardHistory: { ...defaultFlashcards },
  status: 'IDLE',
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
          state.status = 'SUCCEEDED';
          state.flashcards = action.payload;
        }
      )
      .addCase(fetchFlashcards.pending, (state) => {
        state.status = 'PENDING';
      })
      .addCase(fetchFlashcards.rejected, (state) => {
        state.status = 'FAILED';
      })
      .addCase(
        fetchFlashcardHistory.fulfilled,
        (state, action: PayloadAction<FlashcardListItemDto[]>) => {
          state.status = 'SUCCEEDED';
          state.flashcardHistory = action.payload;
        }
      )
      .addCase(fetchFlashcardHistory.pending, (state) => {
        state.status = 'PENDING';
      })
      .addCase(fetchFlashcardHistory.rejected, (state) => {
        state.status = 'FAILED';
      });
  },
  reducers: undefined,
});

export default flashcardSlice.reducer;

import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit';
import { PaginatedDto, UpdateFlashcardDto } from '@shared/types';
import axios from 'axios';
import * as api from './Flashcard.api';
import { FlashcardListItemDto } from '../../../../libs/types/src/lib/flashcard/dto/list-item-flashcard.dto';

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
  items: UpdateFlashcardDto[];
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
        (
          state,
          action: PayloadAction<PaginatedDto<FlashcardListItemDto>>
        ) => {
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
      .addCase(
        updateFlashcard.fulfilled,
        (
          state: FlashcardState,
          action: PayloadAction<UpdateFlashcardDto>
        ) => {
          const items = state.items.map((item) => {
            if (item.id !== action.payload.id) {
              return item;
            }

            return {
              ...item,
              ...action.payload,
            };
          });

          return {
            ...state,
            items: items,
          };
        }
      );
  },
  reducers: undefined,
});

export default flashcardSlice.reducer;

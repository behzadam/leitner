import axios from 'axios';
import {
  PaginatedDto,
  FlashcardListItemDto,
  UpdateFlashcardDto,
} from '@shared/types';

export const fetchFlashcardById = async (id: number) =>
  await axios.get<FlashcardListItemDto>(`/flashcards/${id}`);

export const fetchFlashcards = async () =>
  await axios.get<PaginatedDto<FlashcardListItemDto>>('/flashcards');

export const updateFlashcard = async (params: UpdateFlashcardDto) =>
  await axios.patch<FlashcardListItemDto>(
    `/flashcards/${params.id}`,
    params
  );

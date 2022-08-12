import axios from 'axios';
import { PaginatedDto, Flashcard } from '@shared/types';

export const fetchFlashcardById = async (id: number) =>
  await axios.get<Flashcard>(`/flashcards/${id}`);

export const fetchFlashcards = async () =>
  await axios.get<PaginatedDto<Flashcard>>('/flashcards');

//TODO: should replace any type with dto
export const updateFlashcard = async (params: any) =>
  await axios.patch(`/flashcards/${params.id}`, {
    word: params.word,
    translate: params.translate,
    description: params.description,
  });

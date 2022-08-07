import axios from 'axios';

export const fetchFlashcardById = async (id: number) =>
  await axios.get(`/flashcards/${id}`);

//TODO: should replace any type with dto
export const updateFlashcard = async (params: any) =>
  await axios.patch(`/flashcards/${params.id}`, {
    word: params.word,
    translate: params.translate,
    description: params.description,
  });

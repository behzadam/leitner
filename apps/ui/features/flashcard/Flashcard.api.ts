import axios from 'axios';

export const fetchFlashcardById = async (id: number) =>
  await axios.get(`/flashcards/${id}`);

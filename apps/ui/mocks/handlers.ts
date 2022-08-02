import { rest } from 'msw';

export const handlers = [rest.post('/flashcards', null)];

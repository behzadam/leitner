import { useContext } from 'react';

import {
  FlashcardListEvent,
  FlashcardListEventContext
} from './flashcard-list.provider';

export const useFlashcardListEventContext = (): FlashcardListEvent =>
  useContext(FlashcardListEventContext);

import { useContext } from 'react';

import {
  FlashcardListContext,
  FlashcardListState
} from './flashcard-list.provider';

export const useFlashcardListContext = (): FlashcardListState =>
  useContext(FlashcardListContext);

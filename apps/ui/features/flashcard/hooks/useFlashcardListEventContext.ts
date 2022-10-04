import { useContext } from 'react';

import {
  FlashcardListEvent,
  FlashcardListEventContext,
} from '../provider/FlashcardListProvider';

export const useFlashcardListEventContext = (): FlashcardListEvent =>
  useContext(FlashcardListEventContext);

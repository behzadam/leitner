import { useContext } from 'react';

import {
  FlashcardListContext,
  FlashcardListState,
} from '../provider/FlashcardListProvider';

export const useFlashcardListContext = (): FlashcardListState =>
  useContext(FlashcardListContext);

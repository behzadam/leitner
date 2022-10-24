import { Stack } from '@mui/material';

import FlashcardListActionCreate from '../flashcard/flashcard-list-action-create';
import FlashcardListActionQuiz from '../flashcard/flashcard-list-action-quiz';
import FlashcardListActionStat from '../flashcard/flashcard-list-action-stat';
import CategoryListActionDelete from './category-list-action-delete';
import CategoryListActionEdit from './category-list-action-edit';

type CategoryListActionsType = {
  id?: number
}

const CategoryListActions = ({ id }: CategoryListActionsType): JSX.Element => {
  return (
    <Stack direction="row" justifyContent="space-between" sx={{ width: '100%', fontSize: '5px' }}>
      <CategoryListActionDelete />
      <CategoryListActionEdit />
      <FlashcardListActionStat />
      <FlashcardListActionQuiz />
      <FlashcardListActionCreate />
    </Stack>
  )
}

export default CategoryListActions;
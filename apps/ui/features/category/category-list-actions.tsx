import { Stack } from '@mui/material';

import FlashcardListActionQuiz from '../flashcard/flashcard-list-action-quiz';
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
      <FlashcardListActionQuiz />
    </Stack>
  )
}

export default CategoryListActions;
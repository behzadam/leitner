import { Stack } from '@mui/material';

import FlashcardListActionQuiz from '../flashcard/flashcard-list-action-quiz';
import CategoryListActionDelete from './category-list-action-delete';
import CategoryListActionEdit from './category-list-action-edit';
import CategoryListActionRedirectToList from './category-list-action-redirect-to-list';

type CategoryListActionsType = {
  id: number
}

const CategoryListActions = ({ id }: CategoryListActionsType): JSX.Element => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ width: '100%', fontSize: '5px' }}>
      <CategoryListActionDelete />
      <CategoryListActionEdit />
      <CategoryListActionRedirectToList id={id} />
      <FlashcardListActionQuiz />
    </Stack>
  )
}

export default CategoryListActions;
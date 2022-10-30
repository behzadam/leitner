import { Divider, Stack } from '@mui/material';
import FlashcardListActionsEdit from './flashcard-list-action-edit';

type FlashcardListActionsParams = {
  id: number;
};

const FlashcardListActions = ({
  id
}: FlashcardListActionsParams): JSX.Element => {

  return (
    <Stack
      direction="row"
      spacing={1}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <FlashcardListActionsEdit id={id} />
    </Stack >
  )
}

export default FlashcardListActions;
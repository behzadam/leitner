import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { Divider, IconButton, Stack } from '@mui/material';
import { useDialogEvent } from '@ui/components/dialog/dialog.provider';
import FlashcardFormEdit from './flashcard-form-edit';


const FlashcardListActionsEdit = ({ id }: { id?: number }): JSX.Element => {
  const { onOpenDialog } = useDialogEvent();

  const handleEdit = (): void => {
    onOpenDialog({
      content: <FlashcardFormEdit id={id} />,
      fullWidth: true,
      maxWidth: 'xs'
    })
  }

  return (
    <IconButton onClick={handleEdit}>
      <EditTwoToneIcon fontSize="small" />
    </IconButton>
  )
}

type FlashcardListActionsParams = {
  id?: number;
};

const FlashcardListActions = ({
  id = null
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
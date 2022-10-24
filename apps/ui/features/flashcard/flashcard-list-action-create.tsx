import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import { IconButton } from "@mui/material";
import { useDialogEvent } from '@ui/components/dialog/dialog.provider';
import FlashcardFormCreate from './flashcard-form-create';

const FlashcardListActionCreate = (): JSX.Element => {
  const { onOpenDialog } = useDialogEvent();

  const onCreate = (): void => {
    onOpenDialog({
      content: <FlashcardFormCreate />,
      fullWidth: true,
      maxWidth: 'xs'
    })
  }

  return (
    <IconButton size="medium" onClick={onCreate} >
      <AddCircleTwoToneIcon />
    </IconButton>
  )
}

export default FlashcardListActionCreate;
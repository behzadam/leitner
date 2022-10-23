import { Button } from '@mui/material';
import { useDialogEvent } from '@ui/components/dialog/dialog.provider';

import FlashcardFormCreate from './flashcard-form-create';

const FlashcardListCreate = (): JSX.Element => {
  const { onOpenDialog } = useDialogEvent();

  const onCreate = (): void => {
    onOpenDialog({
      content: <FlashcardFormCreate />
    })
  }

  return (
    <Button size="small" onClick={onCreate} color="primary" variant="contained" disableElevation>
      New
    </Button>
  )
}

export default FlashcardListCreate;
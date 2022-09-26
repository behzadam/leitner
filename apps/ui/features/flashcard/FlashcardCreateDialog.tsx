import { Dialog, DialogTitle, DialogContent } from '@mui/material';

const maxWidth = 'xs';

type FlashcardCreateDialogProps = {
  open: boolean;
  onClose: () => void;
}

const FlashcardCreateDialog = ({
  open = false,
  onClose
}: FlashcardCreateDialogProps): JSX.Element => {

  return (
    <Dialog onClose={onClose} open={open} fullWidth={true} maxWidth={maxWidth}>
      <DialogTitle>Add Flashcard</DialogTitle>
      <DialogContent>
        {
          <p>Flashcard Form Create</p>
        }
      </DialogContent>
    </Dialog>
  )
}

export default FlashcardCreateDialog;
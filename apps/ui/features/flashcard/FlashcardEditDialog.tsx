import { Dialog, DialogTitle, DialogContent } from '@mui/material';

const maxWidth = 'xs';

type FlashcardEditDialogProps = {
  id?: number;
  open: boolean;
  onClose: () => void;
}

const FlashcardEditDialog = ({
  id,
  open,
  onClose
}: FlashcardEditDialogProps): JSX.Element => {
  return (
    <Dialog onClose={onClose} open={open} fullWidth={true} maxWidth={maxWidth}>
      <DialogTitle>Edit Flashcard id: {id}</DialogTitle>
      <DialogContent>
        {
          <p>Flashcard Form Edit</p>
        }
      </DialogContent>
    </Dialog>
  )
}

export default FlashcardEditDialog;
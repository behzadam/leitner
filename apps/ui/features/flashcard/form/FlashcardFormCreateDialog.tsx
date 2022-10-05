import { Dialog, DialogContent } from '@mui/material';

import FlashcardFormCreate from './FlashcardFormCreate';

const maxWidth = 'xs';

type FlashcardCreateDialogProps = {
  open: boolean;
  onClose: () => void;
}

const FlashcardFormCreateDialog = ({
  open = true,
  onClose
}: FlashcardCreateDialogProps): JSX.Element => {

  return (
    <Dialog onClose={onClose} open={open} fullWidth={true} maxWidth={maxWidth}>
      <DialogContent sx={{ p: 0 }}>
        <FlashcardFormCreate />
      </DialogContent>
    </Dialog>
  )
}

export default FlashcardFormCreateDialog;
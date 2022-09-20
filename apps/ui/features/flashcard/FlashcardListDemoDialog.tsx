import { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';


type FlashcardListDemoDialogProps = {
  id?: number;
  setRowId: (rowId: number) => void;
}

const maxWidth = 'xs';
const FlashcardListDemoDialog = ({
  id,
  setRowId
}: FlashcardListDemoDialogProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log('id', id)
    if (id) {
      setOpen(true)
    }
  }, [id])

  const handleClose = (): void => {
    console.log('handleClose')
    setOpen(false);
    setRowId(null)
  }

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={maxWidth}>
      <DialogTitle>{id ? 'Edit' : 'New'} Flashcard</DialogTitle>
      <DialogContent>
        {
          id ? <p>FlashcardFormEdit</p> : <p>FlashcardFormCreate</p>
        }
      </DialogContent>
    </Dialog>
  )
}

export default FlashcardListDemoDialog;
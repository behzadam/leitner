import { useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';


type FlashcardListDemoDialogProps = {
  id?: number;
  setRowId: (rowId: number) => void;
  openDialog: boolean;
  setOpenDialog: (value: boolean) => void;
}

const maxWidth = 'xs';
const FlashcardListDemoDialog = ({
  id,
  openDialog,
  setRowId,
  setOpenDialog
}: FlashcardListDemoDialogProps): JSX.Element => {
  useEffect(() => {
    console.log('id', id)
    if (id) {
      setOpenDialog(true)
    }
  }, [id])

  const handleClose = (): void => {
    console.log('handleClose')
    setOpenDialog(false);
    setRowId(null)
  }

  return (
    <Dialog onClose={handleClose} open={openDialog} fullWidth={true} maxWidth={maxWidth}>
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
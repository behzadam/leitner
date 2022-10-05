import { Box, Button, Dialog, DialogContent, Divider, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFlashcardListContext, useFlashcardListEventContext } from '../hooks';

import FlashcardTextField from './FlashcardTextField';

const maxWidth = 'xs';

const FlashcardFormEditDialog = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const { currentRow } = useFlashcardListContext();
  const { setCurrentRow } = useFlashcardListEventContext();
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!currentRow) return;
    setOpen(true);
  }, [currentRow]);

  const onSubmit = (): void => {
    onClose();
  }

  const onClose = (): void => {
    setOpen(false);
    setCurrentRow(null);
  }

  return (
    <Dialog onClose={onClose} open={open} fullWidth={true} maxWidth={maxWidth}>
      <DialogContent sx={{ p: 0 }}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack
            direction="column"
            divider={<Divider orientation="horizontal" flexItem />}
          >
            <FlashcardTextField variant="outlined" placeholder="Front" />
            <FlashcardTextField variant="outlined" placeholder="Back" />
            <Box sx={{ display: 'flex' }}>
              <Button type="button" onClick={onClose} sx={{ borderRadius: 0, py: 2, flex: 1 }}>Cancel</Button>
              <Button type="submit" variant="contained" sx={{ borderRadius: 0, py: 2, flex: 1 }}>Save</Button>
            </Box>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default FlashcardFormEditDialog;
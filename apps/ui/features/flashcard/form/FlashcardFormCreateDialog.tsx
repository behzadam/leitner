import { Box, Button, Dialog, DialogContent, Divider, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import FlashcardTextField from './FlashcardTextField';


const maxWidth = 'xs';

type FlashcardCreateDialogProps = {
  open: boolean;
  onClose: () => void;
}

const FlashcardFormCreateDialog = ({
  open = true,
  onClose
}: FlashcardCreateDialogProps): JSX.Element => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (): void => {
    console.log('create form onSubmit')
    onClose();
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

export default FlashcardFormCreateDialog;
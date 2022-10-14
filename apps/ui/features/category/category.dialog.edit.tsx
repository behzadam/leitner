import { Box, Button, Dialog, DialogContent, Stack, TextField, Typography } from '@mui/material';


type CategoryFormEditProps = {
  open: boolean;
  onClose: () => void;
}

const CategoryFormEdit = ({
  open,
  onClose
}: CategoryFormEditProps): JSX.Element => {

  const onSubmit = (): void => {
    console.log('create form onSubmit')
    onClose()
  }

  return (
    <Dialog onClose={onClose} open={open} fullWidth={true} maxWidth='xs'>
      <DialogContent>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <Stack
            direction="column"
            spacing={2}
          >
            <Typography variant="body1">Flashcard</Typography>
            <TextField id="category" label="Name" variant="outlined" />
            <Stack spacing={2} direction="row" justifyContent="center">
              <Button type="button" sx={{ flex: 1 }} onClick={onClose}>Cancel</Button>
              <Button type="submit" sx={{ flex: 1 }} variant="contained">Save</Button>
            </Stack>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default CategoryFormEdit;
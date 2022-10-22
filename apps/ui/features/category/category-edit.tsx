import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useDialogEvent } from '@ui/components/dialog/dialog.provider';

type CategoryFormEdit = {
  id?: number;
}

const CategoryFormEdit = ({ id }: CategoryFormEdit): JSX.Element => {
  const { onCloseDialog } = useDialogEvent()
  const onSubmit = (): void => {
    console.log('edit form onSubmit')
    onCloseDialog()
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
      sx={{ minWidth: '300px' }}
    >
      <Stack
        direction="column"
        spacing={2}
      >
        <Typography variant="body1">Flashcard</Typography>
        <TextField id="category" label="Name" variant="outlined" defaultValue={id} />
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button type="button" sx={{ flex: 1 }} onClick={onCloseDialog}>Cancel</Button>
          <Button type="submit" sx={{ flex: 1 }} variant="contained">Save</Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default CategoryFormEdit;
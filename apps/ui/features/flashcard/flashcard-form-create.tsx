import { Box, Button, Divider, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import FlashcardTextField from './flashcard-form-editor';

const FlashcardFormCreate = (): JSX.Element => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (): void => {
    console.log('onSubmit')
  }

  const onCancel = (): void => {
    console.log('onCancel')
  }

  return (
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
          <Button type="button" onClick={onCancel} sx={{ borderRadius: 0, py: 2, flex: 1 }}>Cancel</Button>
          <Button type="submit" variant="contained" sx={{ borderRadius: 0, py: 2, flex: 1 }}>Save</Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default FlashcardFormCreate;
import { Box, Divider, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import FlashcardFormActions from './flashcard-form-actions';
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
        <FlashcardFormActions />
      </Stack>
    </Box>
  )
}

export default FlashcardFormCreate;
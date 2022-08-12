import { Box, TextField, Stack, Button } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { isEmpty } from '@ui/utils/isEmpty';

type FlashcardFormProps = {
  // TODO: should replace any with DTO
  onSubmit: (data: any) => void,
  // TODO: should replace any with DTO
  flashcard: any
}

const FlashcardFormEdit = ({ onSubmit, flashcard }: FlashcardFormProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset(flashcard);
  }, [flashcard]);

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={2} sx={{ pt: 1 }}>
        <TextField error={!isEmpty(errors.word)} helperText="The title is required!" {...register('word', { required: true })} label="Word" variant="outlined" />
        <TextField {...register('translate')} label="Translate" variant="outlined" />
        <TextField {...register('description')} id="description" label="Description" variant="outlined" />
        <Button type="submit" variant="contained" data-testid="submit" >Save</Button>
      </Stack>
    </Box>
  );
}

export default FlashcardFormEdit;
import { Box, Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import FlashcardTextField from './FlashcardTextField';

const FlashcardFormCreate = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (): void => {
    console.log('create form onSubmit')
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack>
        <FlashcardTextField variant="outlined" />
        <FlashcardTextField variant="outlined" />
        <Button type="submit" data-testid="submit" sx={{ borderRadius: 0, py: 2 }}>Save</Button>
      </Stack>
    </Box>
  );
}

export default FlashcardFormCreate;
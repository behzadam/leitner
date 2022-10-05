import { Box, Button, Divider, Stack } from '@mui/material';
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
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <FlashcardTextField variant="outlined" placeholder="Front" />
        <FlashcardTextField variant="outlined" placeholder="Back" />
        <Button type="submit" variant="contained" sx={{ borderRadius: 0, py: 2 }}>Save</Button>
      </Stack>
    </Box>
  );
}

export default FlashcardFormCreate;
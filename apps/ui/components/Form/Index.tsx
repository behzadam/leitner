import { Box, TextField, Stack, Paper, Button } from '@mui/material';

const Form = () => {
  return (
    <Paper sx={{ p: 6, my: 4, mx: "auto", maxWidth: 400 }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2}>
          <TextField id="word" label="Word" variant="outlined" />
          <TextField id="translate" label="Translate" variant="outlined" />
          <TextField id="description" label="Description" variant="outlined" />
          <Button variant="contained">Save</Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default Form;
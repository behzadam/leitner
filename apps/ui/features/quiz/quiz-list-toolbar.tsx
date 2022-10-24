
import { Box, Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center'
}));


const QuizListToolbar = (): JSX.Element => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      spacing={2}
      sx={{ py: 1, width: '100%' }}
    >
      <Box sx={{ mx: 'auto' }}>
        <Typography variant="overline" component="h6"><strong>Flashcard</strong></Typography>
      </Box>
    </Stack>
  )
}

export default QuizListToolbar;
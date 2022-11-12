import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import { Stack, Typography } from '@mui/material';

const QuizDeckSuccess = (): JSX.Element => {
  return (
    <Stack spacing={2} direction="column" alignItems="center" sx={{ m: 'auto' }}>
      <EmojiEventsTwoToneIcon sx={{ fontSize: '4rem' }} color='success' />
      <Stack spacing={0.5} alignItems="center">
        <Typography fontWeight={700}>
          Remembered: 20
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Not remembered: 20
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Items: 40
        </Typography>
      </Stack>
    </Stack>
  )
}

export default QuizDeckSuccess;
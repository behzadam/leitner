import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import { Stack, Typography } from '@mui/material';
import { useAppSelector } from '@ui/store/index';
import { selectFlashcardsCount, selectRememeberedCount } from './quiz-slice';

const QuizDeckSuccess = (): JSX.Element => {
  const rememeberedCount = useAppSelector(selectRememeberedCount);
  const cardsCount = useAppSelector(selectFlashcardsCount);

  return (
    <Stack spacing={2} direction="column" alignItems="center" sx={{ m: 'auto' }}>
      <EmojiEventsTwoToneIcon sx={{ fontSize: '4rem' }} color='success' />
      <Stack spacing={0.5} alignItems="center">
        <Typography fontWeight={700}>
          Remembered: {rememeberedCount.yesCount}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Not remembered: {rememeberedCount.noCount}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Items: {cardsCount}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default QuizDeckSuccess;
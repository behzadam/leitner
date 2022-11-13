import { Typography } from "@mui/material";
import { useAppSelector } from "@ui/store/index";
import { selectCurrentIndex, selectFlashcardsCount } from "./quiz-slice";


const QuizDeckToolbarProgress = (): JSX.Element => {
  const currentIndex = useAppSelector(selectCurrentIndex);
  const cardsCount = useAppSelector(selectFlashcardsCount);

  return (
    <Typography variant="overline" sx={{ fontSize: '11px' }}>
      {currentIndex + 1} / {cardsCount}
    </Typography>
  )
}

export default QuizDeckToolbarProgress;
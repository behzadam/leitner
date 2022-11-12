import { Typography } from "@mui/material";
import Show from "@ui/components/Show";
import { useAppSelector } from "@ui/store/index";
import { selectCurrentIndex, selectFlashcardsCount } from "./quiz-slice";


const QuizDeckToolbarProgress = (): JSX.Element => {
  const currentIndex = useAppSelector(selectCurrentIndex);
  const cardsCount = useAppSelector(selectFlashcardsCount);

  return (
    <Show when={currentIndex < cardsCount}>
      <Typography variant="overline" sx={{ fontSize: '11px' }}>
        {currentIndex + 1} / {cardsCount}
      </Typography>
    </Show>
  )
}

export default QuizDeckToolbarProgress;
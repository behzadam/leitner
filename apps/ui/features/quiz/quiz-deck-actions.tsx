import { Stack } from '@mui/material';
import Show from '@ui/components/Show';
import { useAppSelector } from '@ui/store/index';

import QuizDeckActionsFlip from './quiz-deck-actions-flip';
import QuizDeckActionsNoRemember from './quiz-deck-actions-no-remember';
import QuizDeckActionsRemember from './quiz-deck-actions-remember';
import { selectCurrentIndex, selectFlashcardsCount } from './quiz-slice';

type QuizDeckActionsProps = {
  onRemember: (index: number, isRemembered: boolean) => void;
}

const QuizDeckActions = ({ onRemember }: QuizDeckActionsProps): JSX.Element => {
  const cardsCount = useAppSelector(selectFlashcardsCount);
  const currentIndex = useAppSelector(selectCurrentIndex);
  return (
    <Show when={currentIndex < cardsCount}>
      <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
        <QuizDeckActionsNoRemember onRemember={(index) => onRemember(index, false)} />
        <QuizDeckActionsRemember onRemember={(index) => onRemember(index, true)} />
        <QuizDeckActionsFlip />
      </Stack>
    </Show>
  )
}

export default QuizDeckActions;


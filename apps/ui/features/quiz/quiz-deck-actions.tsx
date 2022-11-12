import { Stack } from '@mui/material';
import Show from '@ui/components/Show';
import { useAppSelector } from '@ui/store/index';

import QuizDeckActionsFlip from './quiz-deck-actions-flip';
import QuizDeckActionsNoRemember from './quiz-deck-actions-no-remember';
import QuizDeckActionsReload from './quiz-deck-actions-reload';
import QuizDeckActionsRemember from './quiz-deck-actions-remember';
import { selectIsDeckFinished } from './quiz-slice';

type QuizDeckActionsProps = {
  onRemember: (index: number, isRemembered: boolean) => void;
}

const QuizDeckActions = ({ onRemember }: QuizDeckActionsProps): JSX.Element => {
  const isDeckFinished = useAppSelector(selectIsDeckFinished);

  return (
    <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
      <Show when={!isDeckFinished}>
        <QuizDeckActionsNoRemember onRemember={(index) => onRemember(index, false)} />
        <QuizDeckActionsRemember onRemember={(index) => onRemember(index, true)} />
        <QuizDeckActionsFlip />
      </Show>
      <Show when={isDeckFinished}>
        <QuizDeckActionsReload />
      </Show>
    </Stack>
  )
}

export default QuizDeckActions;


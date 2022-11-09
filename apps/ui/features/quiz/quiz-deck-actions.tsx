import { Stack } from "@mui/material";
import QuizDeckActionsFlip from './quiz-deck-actions-flip';
import QuizDeckActionsNoRemember from "./quiz-deck-actions-no-remember";
import QuizDeckActionsRemember from './quiz-deck-actions-remember';


const QuizDeckActions = (): JSX.Element => {
  return (
    <Stack spacing={2} direction="row" sx={{ mt: 'auto', mb: 2 }}>
      <QuizDeckActionsNoRemember />
      <QuizDeckActionsFlip />
      <QuizDeckActionsRemember />
    </Stack>
  )
}

export default QuizDeckActions;


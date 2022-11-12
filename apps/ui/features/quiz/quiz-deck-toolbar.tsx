
import { Stack, Typography } from "@mui/material";
import QuizDeckToolbarProgress from './quiz-deck-toolbar-progress';


const QuizDeckToolbar = (): JSX.Element => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ mb: 1 }}
    >
      <Typography variant="overline" sx={{ fontWeight: 600, pr: 2 }}>Flashcards</Typography>
      <QuizDeckToolbarProgress />
    </Stack >
  )
}

export default QuizDeckToolbar;
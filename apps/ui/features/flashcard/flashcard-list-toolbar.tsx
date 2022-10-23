import { Stack, Typography } from "@mui/material";
import FlashcardListActionCreate from "./flashcard-list-action-create";
import FlashcardListActionDelete from "./flashcard-list-action-delete";
import FlashcardListQuiz from "./flashcard-list-action-quiz";

const FlashcardListToolbar = (): JSX.Element => {
  return (
    <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
      <Typography variant="h6" >
        Flashcards
      </Typography>
      <FlashcardListActionDelete />
      <Stack direction="row" alignItems="center" spacing={1} sx={{ ml: 'auto' }}>
        <FlashcardListQuiz />
        <FlashcardListActionCreate />
      </Stack>
    </Stack>
  )
}

export default FlashcardListToolbar;
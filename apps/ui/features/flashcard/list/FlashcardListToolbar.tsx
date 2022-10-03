import { Stack, Typography } from "@mui/material";
import FlashcardListQuiz from "./FlashcardListQuiz";

const FlashcardListToolbar = (): JSX.Element => {
  return (
    <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
      <Typography variant="h6" >
        Flashcards
      </Typography>
      <FlashcardListDelete />
      <Stack direction="row" alignItems="center" spacing={1} sx={{ ml: 'auto' }}>
        <FlashcardListQuiz />
        <FlashcardListCreate />
      </Stack>
    </Stack>
  )
}

export default FlashcardListToolbar;
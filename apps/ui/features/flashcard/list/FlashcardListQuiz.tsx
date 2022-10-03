import { Button } from "@mui/material";
import Link from "next/link";

const FlashcardListQuiz = (): JSX.Element => {
  return (
    <Link href="/quiz">
      <Button size="small" color="secondary" variant="contained" disableElevation>Quiz</Button>
    </Link>
  )
}

export default FlashcardListQuiz;
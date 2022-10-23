import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { IconButton } from "@mui/material";
import Link from "next/link";

const FlashcardListActionQuiz = (): JSX.Element => {
  return (
    <Link href="/quiz">
      <IconButton size="medium">
        <PlayArrowRoundedIcon />
      </IconButton>
    </Link>
  )
}

export default FlashcardListActionQuiz;
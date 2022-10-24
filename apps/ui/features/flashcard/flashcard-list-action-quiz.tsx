import PlayArrowTwoToneIcon from '@mui/icons-material/PlayArrowTwoTone';
import { IconButton } from "@mui/material";
import Link from "next/link";

const FlashcardListActionQuiz = (): JSX.Element => {
  return (
    <Link href="/quiz">
      <IconButton size="medium">
        <PlayArrowTwoToneIcon />
      </IconButton>
    </Link>
  )
}

export default FlashcardListActionQuiz;
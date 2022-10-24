import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { IconButton } from "@mui/material";
import Link from "next/link";

const FlashcardListActionQuiz = (): JSX.Element => {
  return (
    <Link href="/quiz">
      <IconButton size="medium">
        <PlayArrowOutlinedIcon />
      </IconButton>
    </Link>
  )
}

export default FlashcardListActionQuiz;
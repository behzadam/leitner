import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { IconButton } from "@mui/material";
import Link from "next/link";

const FlashcardListActionQuiz = (): JSX.Element => {
  return (
    <Link href="/quiz">
      <IconButton size="medium" color="primary">
        <PlayCircleOutlineOutlinedIcon />
      </IconButton>
    </Link>
  )
}

export default FlashcardListActionQuiz;
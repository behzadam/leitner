import LeaderboardTwoToneIcon from '@mui/icons-material/LeaderboardTwoTone';
import { IconButton } from "@mui/material";
import Link from "next/link";

const FlashcardListActionStat = (): JSX.Element => {
  return (
    <Link href="/quiz">
      <IconButton size="medium">
        <LeaderboardTwoToneIcon />
      </IconButton>
    </Link>
  )
}

export default FlashcardListActionStat;
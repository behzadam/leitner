import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import { IconButton } from "@mui/material";
import Link from "next/link";

const FlashcardListActionStat = (): JSX.Element => {
  return (
    <Link href="/quiz">
      <IconButton size="medium">
        <EqualizerRoundedIcon />
      </IconButton>
    </Link>
  )
}

export default FlashcardListActionStat;
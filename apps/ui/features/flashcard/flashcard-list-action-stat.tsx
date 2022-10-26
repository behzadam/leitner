import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import { IconButton } from "@mui/material";
import Link from "next/link";

const FlashcardListActionStat = (): JSX.Element => {
  return (
    <Link href="/stat">
      <IconButton size="medium">
        <PieChartOutlineOutlinedIcon />
      </IconButton>
    </Link>
  )
}

export default FlashcardListActionStat;
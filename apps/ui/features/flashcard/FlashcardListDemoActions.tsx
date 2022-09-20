import { Box, IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import Link from "next/link";

type FlashcardListDemoActionsParams = {
  id: null | number
}

const FlashcardListDemoActions = ({ id }: FlashcardListDemoActionsParams): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Link
        href={{
          pathname: `/detail/[id]`,
          query: { id }
        }}
      >
        <a>
          <IconButton>
            <InfoIcon fontSize="small" />
          </IconButton>
        </a>
      </Link>
    </Box>
  )
}

export default FlashcardListDemoActions;
import { Divider, IconButton, Stack } from "@mui/material";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import Link from "next/link";

type FlashcardListDemoActionsParams = {
  currentRowId?: number;
  setCurrentRowId: (id: number) => void;
}

const FlashcardListDemoActions = ({
  currentRowId,
  setCurrentRowId
}: FlashcardListDemoActionsParams): JSX.Element => {
  return (
    <Stack
      direction="row"
      spacing={1}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Link
        href={{
          pathname: `/detail/[currentRowId]`,
          query: { currentRowId }
        }}
      >
        <a>
          <IconButton>
            <InfoTwoToneIcon fontSize="small" />
          </IconButton>
        </a>
      </Link>
      <IconButton onClick={() => setCurrentRowId(currentRowId)}>
        {currentRowId}
        <EditTwoToneIcon fontSize="small" />
      </IconButton>
    </Stack >
  )
}

export default FlashcardListDemoActions;
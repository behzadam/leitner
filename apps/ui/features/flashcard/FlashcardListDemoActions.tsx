import { Divider, IconButton, Stack } from "@mui/material";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import Link from "next/link";

type FlashcardListDemoActionsParams = {
  id: null | number;
  setRowId: (rowId: number) => void;
}

const FlashcardListDemoActions = (
  {
    id,
    setRowId
  }: FlashcardListDemoActionsParams): JSX.Element => {
  return (
    <Stack
      direction="row"
      spacing={1}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Link
        href={{
          pathname: `/detail/[id]`,
          query: { id }
        }}
      >
        <a>
          <IconButton>
            <InfoTwoToneIcon fontSize="small" />
          </IconButton>
        </a>
      </Link>
      <IconButton onClick={() => setRowId(id)}>
        <EditTwoToneIcon fontSize="small" />
      </IconButton>
    </Stack >
  )
}

export default FlashcardListDemoActions;
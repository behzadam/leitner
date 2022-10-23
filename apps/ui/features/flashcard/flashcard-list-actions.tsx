import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import { Divider, IconButton, Stack } from '@mui/material';
import Link from 'next/link';
import { useFlashcardListEventContext } from './use-flashcard-list-event-context';

type FlashcardListActionsParams = {
  id?: number;
};

const FlashcardListDemoActions = ({
  id = null
}: FlashcardListActionsParams): JSX.Element => {
  const { setCurrentRow } = useFlashcardListEventContext()
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
      <IconButton onClick={() => setCurrentRow(id)}>
        <EditTwoToneIcon fontSize="small" />
      </IconButton>
    </Stack >
  )
}

export default FlashcardListDemoActions;
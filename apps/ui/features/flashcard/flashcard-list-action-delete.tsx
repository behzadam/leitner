import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { IconButton } from '@mui/material';
import Show from '@ui/components/Show';
import { useEffect, useState } from 'react';
import { useFlashcardDelete } from './use-flashcard-delete';
import { useFlashcardListContext } from './use-flashcard-list-context';


const FlashcardListActionDelete = (): JSX.Element => {
  const { currentRows } = useFlashcardListContext();
  const [showDeleteButton, setShowDeleteButton] = useState<boolean>(false);
  const { onDelete } = useFlashcardDelete();

  useEffect(() => {
    if (currentRows.length > 0) {
      setShowDeleteButton(true)
    } else {
      setShowDeleteButton(false)
    }
  }, [currentRows])

  return (
    <Show when={showDeleteButton}>
      <IconButton aria-label="delete" sx={{ ml: 1 }} onClick={() => onDelete(1)} size="small">
        <DeleteTwoToneIcon />
      </IconButton>
    </Show>
  )
}

export default FlashcardListActionDelete;
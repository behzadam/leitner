import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import Show from '@ui/components/Show';
import { useEffect, useState } from 'react';
import { useFlashcardListContext } from '../hooks';
import { useFlashcardDelete } from '../use-flashcard-delete';


const FlashcardListDelete = (): JSX.Element => {
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
        <DeleteIcon sx={{ fontSize: 18 }} />
      </IconButton>
    </Show>
  )
}

export default FlashcardListDelete;
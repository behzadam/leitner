import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import Show from '@ui/components/Show';
import { useEffect, useState } from 'react';

import { useFlashcardDelete, useFlashcardListContext } from '../hooks';


const FlashcardListDelete = (): JSX.Element => {
  const { currentRows } = useFlashcardListContext();
  const [showDeleteButton, setShowDeleteButton] = useState<boolean>(false);
  const { handleDeleteRows } = useFlashcardDelete();

  useEffect(() => {
    if (currentRows.length > 0) {
      setShowDeleteButton(true)
    } else {
      setShowDeleteButton(false)
    }
  }, [currentRows])

  return (
    <Show when={showDeleteButton}>
      <IconButton aria-label="delete" sx={{ ml: 1 }} onClick={handleDeleteRows} size="small">
        <DeleteIcon sx={{ fontSize: 18 }} />
      </IconButton>
    </Show>
  )
}

export default FlashcardListDelete;
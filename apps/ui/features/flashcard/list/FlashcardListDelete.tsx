import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import useFlashcardDelete from "../hooks/useFlashcardDelete";
import { useFlashcardListContext } from "./FlashcardListDemo";

const FlashcardListDelete = (): JSX.Element => {
  const { currentRows } = useFlashcardListContext();
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const { handleDeleteRows } = useFlashcardDelete();

  useEffect(() => {
    if (currentRows.length > 0) {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }, [currentRows])

  return (
    <IconButton aria-label="delete" sx={{ ml: 1 }} onClick={handleDeleteRows} size="small" color="error" disabled={disableButton}>
      <DeleteIcon />
    </IconButton>
  )
}

export default FlashcardListDelete;
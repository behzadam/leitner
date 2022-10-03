import { IconButton } from "@mui/material";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import useFlashcardDelete from "../hooks/useFlashcardDelete";

const FlashcardListDelete = (): JSX.Element => {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const { handleDeleteRows } = useFlashcardDelete();

  return (
    <IconButton aria-label="delete" sx={{ ml: 1 }} onClick={handleDeleteRows} size="small" color="error" disabled={disableButton}>
      <DeleteIcon />
    </IconButton>
  )
}

export default FlashcardListDelete;
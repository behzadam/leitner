import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { IconButton } from "@mui/material";
import { useDialogEvent } from "@ui/components/dialog/dialog.provider";
import FlashcardFormEdit from "./flashcard-form-edit";


const FlashcardListActionsEdit = ({ id }: { id?: number }): JSX.Element => {
  const { onOpenDialog } = useDialogEvent();

  const handleEdit = (): void => {
    onOpenDialog({
      content: <FlashcardFormEdit id={id} />,
      fullWidth: true,
      maxWidth: 'xs'
    })
  }

  return (
    <IconButton onClick={handleEdit}>
      <EditTwoToneIcon fontSize="small" />
    </IconButton>
  )
}

export default FlashcardListActionsEdit;
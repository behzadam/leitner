import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { IconButton } from "@mui/material";
import { useDialogEvent } from "@ui/components/dialog/dialog.provider";
import CategoryFormEdit from "./category-edit";

type CategoryListActionEditProps = {
  id?: number
}

const CategoryListActionEdit = ({
  id
}: CategoryListActionEditProps): JSX.Element => {

  const { onOpenDialog } = useDialogEvent();
  const onEdit = (): void => {
    console.log('onEdit', id)
    onOpenDialog({
      content: <CategoryFormEdit id={id} />
    })
  }

  return (
    <IconButton
      size="medium"
      onClick={onEdit}
    >
      <EditTwoToneIcon />
    </IconButton>
  )
}

export default CategoryListActionEdit;
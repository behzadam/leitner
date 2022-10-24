import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
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
      <EditOutlinedIcon />
    </IconButton>
  )
}

export default CategoryListActionEdit;
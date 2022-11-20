import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { IconButton } from '@mui/material';
import { useDialogEvent } from '@ui/components/dialog/dialog.provider';

import CategoryFormCreate from './category-form-create';

const CategoryListAddButton = (): JSX.Element => {
  const { onOpenDialog } = useDialogEvent();
  return (
    <IconButton
      color="primary"
      size="medium"
      onClick={() => onOpenDialog({
        content: <CategoryFormCreate />
      })}>
      <AddCircleOutlineOutlinedIcon />
    </IconButton>
  )
}

export default CategoryListAddButton;
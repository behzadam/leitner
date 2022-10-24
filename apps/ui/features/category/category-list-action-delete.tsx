import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { IconButton } from '@mui/material';
import useConfirm from "@ui/components/confirm/use-confirm";

type CategoryListActionDeleteProps = {
  id?: number
}

const CategoryListActionDelete = ({ id }: CategoryListActionDeleteProps): JSX.Element => {
  const { onOpenConfirm } = useConfirm();

  const onDelete = async (): Promise<void> => {
    console.log('onDelete')
    const confirmed = await onOpenConfirm({
      title: 'Delete',
      message: 'Are you sure you want to delete this item?'
    });

    if (confirmed) {
      console.log('onDelete is confirmed', id)
    } else {
      console.log('onDelete is not confirmed', id)
    }
  }

  return (
    <IconButton
      size="medium"
      onClick={onDelete}
    >
      <DeleteTwoToneIcon />
    </IconButton>
  )
}

export default CategoryListActionDelete;
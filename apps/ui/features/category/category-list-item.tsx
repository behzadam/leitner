import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  ButtonProps,
  Card,
  CardActions,
  CardContent,
  IconButton, Stack,
  styled,
  Typography
} from '@mui/material';
import useConfirm from '@ui/components/confirm/use-confirm';
import { useDialogEvent } from '@ui/components/dialog/dialog.provider';
import FlashcardListActionCreate from '../flashcard/flashcard-list-action-create';
import FlashcardListActionQuiz from '../flashcard/flashcard-list-action-quiz';
import FlashcardListActionStat from '../flashcard/flashcard-list-action-stat';
import CategoryFormEdit from './category-edit';

const Item = styled(Button)<ButtonProps>(({ theme }) => ({
  'a': {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.grey[600],
    fontSize: 11,
    textDecoration: 'none',
  },
  'a > svg': {
    fontSize: 12,
    marginRight: 3,
  }
}));


const DeleteButtonWithConfirm = ({ id }: { id?: number }): JSX.Element => {
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
      size="small"
      onClick={onDelete}
    >
      <DeleteIcon sx={{ fontSize: 15 }} />
    </IconButton>
  )
}

const EditButtonWithDialog = ({ id }: { id?: number }): JSX.Element => {
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
      <EditIcon sx={{ fontSize: 15 }} />
    </IconButton>
  )
}

type CategoryListItemProps = {
  id?: number;
}

const CategoryListItem = ({ id }: CategoryListItemProps): JSX.Element => {
  console.log({ id })

  return (
    <Card>
      <CardContent>
        <Stack direction="row" alignItems="center">
          <Typography variant="overline">Flashcard Name</Typography>
          <Box sx={{ ml: 'auto' }}>
            <DeleteButtonWithConfirm id={id} />
            <EditButtonWithDialog id={id} />
          </Box>
        </Stack>
      </CardContent>
      <CardActions>
        <Stack direction="row" justifyContent="space-between" sx={{ fontSize: 11, width: '100%' }}>
          <FlashcardListActionStat />
          <FlashcardListActionQuiz />
          <FlashcardListActionCreate />
        </Stack>
      </CardActions>
    </Card>
  )
}

export default CategoryListItem;
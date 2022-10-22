import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
import {
  Box,
  Button,
  ButtonProps,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Link,
  Stack,
  styled,
  Typography
} from '@mui/material';
import useConfirm from '@ui/components/confirm/use-confirm';
import { useDialogEvent } from '@ui/components/dialog/dialog.provider';
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
          <Item>
            <Link href="/flashcards">
              <a>
                <StyleRoundedIcon />
                List
              </a>
            </Link>
          </Item>
          <Item>
            <Link href="/stat">
              <a>
                <PieChartRoundedIcon />
                Stat
              </a>
            </Link>
          </Item>
          <Item>
            <Link href="/quiz">
              <a>
                <QuizRoundedIcon />
                Quiz
              </a>
            </Link>
          </Item>
        </Stack>
      </CardActions>
    </Card>
  )
}

export default CategoryListItem;
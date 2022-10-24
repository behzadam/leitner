import {
  Card,
  CardActions,
  CardContent, Stack, Typography
} from '@mui/material';
import CategoryListActions from './category-list-actions';

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
        </Stack>
      </CardContent>
      <CardActions>
        <CategoryListActions id={id} />
      </CardActions>
    </Card>
  )
}

export default CategoryListItem;
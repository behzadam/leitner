import OpenInNewTwoToneIcon from '@mui/icons-material/OpenInNewTwoTone';
import {
  Card,
  CardActions,
  CardContent, Stack, Typography
} from '@mui/material';
import Link from '@ui/components/link/Link';
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
          <Link href="/flashcards">
            <Typography variant="overline">Flashcard Name</Typography>
            <OpenInNewTwoToneIcon sx={{ fontSize: 10, ml: 1 }} />
          </Link>
        </Stack>
      </CardContent>
      <CardActions>
        <CategoryListActions id={id} />
      </CardActions>
    </Card>
  )
}

export default CategoryListItem;
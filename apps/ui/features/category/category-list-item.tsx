import OpenInNewTwoToneIcon from '@mui/icons-material/OpenInNewTwoTone';
import {
  Card,
  CardActions,
  CardContent, Stack, Typography
} from '@mui/material';
import LinkWithoutUnderline from '@ui/components/link/LinkNoUnderline';
import CategoryListActions from './category-list-actions';

type CategoryListItemProps = {
  id?: number;
}

const CategoryListItem = ({ id }: CategoryListItemProps): JSX.Element => {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" alignItems="center">
          <LinkWithoutUnderline href="/flashcards" sx={{ display: 'flex', alignItems: 'center' }} >
            <Typography
              variant="h2"
              sx={{
                fontSize: 14,
                fontFamily: 'monospace',
                fontWeight: 'bold'
              }}
              component="h2"
              color="primary"
            >
              Flashcard Name
            </Typography>
            <OpenInNewTwoToneIcon sx={{ fontSize: 10, ml: 1 }} />
          </LinkWithoutUnderline>
        </Stack>
      </CardContent>
      <CardActions>
        <CategoryListActions id={id} />
      </CardActions>
    </Card>
  )
}

export default CategoryListItem;
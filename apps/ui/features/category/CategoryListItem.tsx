import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
import { Button, ButtonProps, Card, CardActions, CardContent, Link, Stack, styled, Typography } from "@mui/material";

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

const CategoryListItem = (): JSX.Element => {
  return (
    <Card>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="overline">Flashcard Name</Typography>
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
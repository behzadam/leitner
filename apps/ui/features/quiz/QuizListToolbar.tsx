import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import { Box, Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Link from '@ui/components/link/Link';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center'
}));


const QuizListToolbar = (): JSX.Element => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      spacing={2}
      sx={{ py: 1, width: '100%' }}
    >
      <Item>
        <ArrowBackOutlinedIcon sx={{ fontSize: 12, mr: 0.5 }} />
        <Typography variant="overline">
          <Link href="/flashcards">
            <a>Back</a>
          </Link>
        </Typography>
      </Item>
      <Item sx={{ mx: 'auto' }}>
        <Typography variant="overline" component="h6"><strong>Flashcard</strong></Typography>
      </Item>
      <Item>
        <ArrowForwardRoundedIcon sx={{ fontSize: 12, mr: 0.5 }} />
        <Typography variant="overline">
          <Link href="/stat">
            <a>Stat</a>
          </Link>
        </Typography>
      </Item>
    </Stack>
  )
}

export default QuizListToolbar;
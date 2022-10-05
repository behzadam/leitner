import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import PieChartOutlineRoundedIcon from '@mui/icons-material/PieChartOutlineRounded';

import { Box, Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

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
        <Typography variant="overline">List</Typography>
      </Item>
      <Item sx={{ mx: 'auto' }}>
        <Typography variant="overline" component="h6">Flashcard</Typography>
      </Item>
      <Item>
        <PieChartOutlineRoundedIcon sx={{ fontSize: 12, mr: 0.5 }} />
        <Typography variant="overline">Stat</Typography>
      </Item>
    </Stack>
  )
}

export default QuizListToolbar;
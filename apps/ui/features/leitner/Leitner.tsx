import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import StyleTwoToneIcon from '@mui/icons-material/StyleTwoTone';

const Item = styled(CardContent)(({ theme }) => ({
  marginBottom: '10px'
}));

const Leitner = (): JSX.Element => {
  const leitnerBox = new Array(5).fill(0);
  const leitnerBoxColors = ['#9ca3af', '#fde68a', '#fdba74', '#60a5fa', '#14b8a6'];
  return (
    <Stack
      sx={{ margin: 'auto', borderRadius: '0px', overflow: 'hidden' }}
    >
      {
        leitnerBox.map((_, index) => {
          return (
            <Card variant="outlined" key={index} sx={{ marginBottom: 1 }}>
              <CardContent>
                <Stack
                  direction="row"
                  alignItems="center">
                  <StyleTwoToneIcon sx={{ mr: 2, color: leitnerBoxColors[index] }} />
                  <Typography variant="caption">Cards: {index + 1}</Typography>
                  <Typography variant="caption" sx={{ ml: 2 }}>Ready: {index + 3}</Typography>
                </Stack>
              </CardContent>
            </Card>
          )
        })
      }
      <Typography variant="caption">Items: 110</Typography>
    </Stack >
  )
}

export default Leitner;
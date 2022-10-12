import StyleTwoToneIcon from '@mui/icons-material/StyleTwoTone';
import { Box, BoxProps, Paper, Stack, styled, Typography } from '@mui/material';

const Item = styled(Box)<BoxProps>(() => ({
  minWidth: '100%',
  display: 'flex',
  alignItems: 'center',
  border: '2px solid rgba(0,0,0,0.05)',
  paddingTop: '1em',
  paddingBottom: '1em',
  paddingLeft: '0.6em',
  paddingRight: '0.6em',
  borderRadius: '0.6em'
}));

const Leitner = (): JSX.Element => {
  const leitnerBox = [
    { box: 5, color: '#14b8a6' },
    { box: 4, color: '#60a5fa' },
    { box: 3, color: '#fdba74' },
    { box: 2, color: '#fde68a' },
    { box: 1, color: '#9ca3af' }
  ]

  return (
    <Paper sx={{ p: 2 }}>
      <Stack
        spacing={1}
        sx={{ margin: 'auto', borderRadius: '0px', overflow: 'hidden' }}
      >
        <Typography variant="overline" sx={{ textAlign: 'center' }}>Leitner System</Typography>
        {
          leitnerBox.map((_, index) => {
            return (
              <Item key={index}>
                <StyleTwoToneIcon sx={{ mr: 0.5, color: leitnerBox[index].color }} />
                <Typography variant="caption" sx={{ mr: 1, color: leitnerBox[index].color }}>Box {leitnerBox[index].box}</Typography>
                <Typography variant="caption" sx={{ ml: 1 }}>Cards: {index + 1}</Typography>
              </Item>
            )
          })
        }
        <Typography variant="caption" sx={{ textAlign: 'center' }}>Items: 110</Typography>
      </Stack>
    </Paper>
  )
}

export default Leitner;
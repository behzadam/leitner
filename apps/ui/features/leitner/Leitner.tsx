import { Divider, Paper, Stack } from "@mui/material";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '11px',
  color: theme.palette.text.secondary,
  borderRadius: '0px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none'
}));

const Leitner = (): JSX.Element => {

  return (
    <Paper>
      <Stack
        sx={{ margin: 'auto', borderRadius: '4px', overflow: 'hidden' }}
      >
        <Item sx={{ height: 90, backgroundColor: '#ecfccb' }}>5</Item>
        <Item sx={{ height: 55, backgroundColor: '#cffafe' }}>4</Item>
        <Item sx={{ height: 45, backgroundColor: '#fffbeb' }}>3</Item>
        <Item sx={{ height: 35, backgroundColor: '#f5f5f5' }}>2</Item>
        <Item sx={{ height: 30, backgroundColor: '#fafafa' }}>1</Item>
      </Stack>
    </Paper>
  )
}

export default Leitner;
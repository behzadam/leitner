import { Divider, Paper, Stack } from "@mui/material";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '11px',
  color: theme.palette.text.secondary,
  borderRadius: '0px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const Leitner = (): JSX.Element => {

  return (
    <Stack
      divider={<Divider orientation="horizontal" flexItem />}
      sx={{ margin: 'auto', borderRadius: '4px', overflow: 'hidden' }}
    >
      <Item sx={{ height: 90 }}>5</Item>
      <Item sx={{ height: 55 }}>4</Item>
      <Item sx={{ height: 45 }}>3</Item>
      <Item sx={{ height: 35 }}>2</Item>
      <Item sx={{ height: 30 }}>1</Item>
    </Stack>
  )
}

export default Leitner;
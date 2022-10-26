import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Button, ButtonProps, Divider, Stack, styled } from '@mui/material';

const Item = styled(Button)<ButtonProps>(() => ({
  height: 45,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const QuizListItemActions = (): JSX.Element => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        p: 1,
      }}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Item sx={{ flex: 0.5 }}>
        <CloseOutlinedIcon />
      </Item>
      <Item sx={{ flex: 0.5 }}>
        <VisibilityOffOutlinedIcon />
      </Item>
      <Item sx={{ flex: 1 }} color="success">
        <CheckOutlinedIcon color="success" />
      </Item>
    </Stack>
  )
}

export default QuizListItemActions;
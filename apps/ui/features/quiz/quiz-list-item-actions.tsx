import { Box, BoxProps, Divider, Stack, styled } from "@mui/material";

const Item = styled(Box)<BoxProps>(() => ({
  height: 35,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
}))

const QuizListItemActions = (): JSX.Element => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        py: 1,
      }}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Item sx={{ flex: 0.5 }}>Cancel</Item>
      <Item sx={{ flex: 0.5 }}>Show</Item>
      <Item sx={{ flex: 1 }}>Ok</Item>
    </Stack>
  )
}

export default QuizListItemActions;
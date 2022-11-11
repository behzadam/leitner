import { Box, Divider, FormControlLabel, FormGroup, Stack, Switch } from "@mui/material";


const QuizDeckFormFettings = (): JSX.Element => {

  const handleSubmit = (): void => {
    console.log('handleSubmit');
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Settings" />
          <FormControlLabel control={<Switch />} label="Options" />
        </FormGroup>
      </Stack>
    </Box>
  )
}

export default QuizDeckFormFettings;
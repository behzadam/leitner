import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { IconButton, Stack } from "@mui/material";

const QuizActions = (): JSX.Element => {

  return (
    <Stack direction="row" spacing={2}>
      <IconButton color="primary">
        <SettingsOutlinedIcon />
      </IconButton>
      <IconButton color="primary">
        <PlayCircleFilledWhiteOutlinedIcon />
      </IconButton>
      <IconButton color="primary">
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
    </Stack>
  )
}

export default QuizActions;
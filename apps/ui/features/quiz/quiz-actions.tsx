import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

import { IconButton, Stack } from "@mui/material";

const QuizActions = (): JSX.Element => {

  return (
    <Stack direction="row" spacing={2}>
      <Stack direction="row" spacing={2}>
        <IconButton color="primary">
          <WestOutlinedIcon />
        </IconButton>
        <IconButton color="primary">
          <EastOutlinedIcon />
        </IconButton>
      </Stack>
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
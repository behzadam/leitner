import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { IconButton, Stack } from "@mui/material";

const QuizToolbox = (): JSX.Element => {
  return (
    <Stack direction="row" spacing={2}>
      <IconButton color="primary">
        <SettingsOutlinedIcon />
      </IconButton>
      <IconButton color="primary">
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
    </Stack>
  )
}

export default QuizToolbox;
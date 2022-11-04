import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { IconButton, Stack } from "@mui/material";
import Show from '@ui/components/Show';
import { useState } from 'react';

const QuizDeckActions = (): JSX.Element => {
  const [flipped, setFlipped] = useState<boolean>(false);

  const handleFlipped = (): void => {
    setFlipped(flipped => !flipped)
  }

  const handleRemember = (): void => {
    console.log('handleRemember')
  }

  return (
    <Stack spacing={2} direction="row" sx={{ mt: 'auto', mb: 2 }}>
      <IconButton color="error">
        <CloseOutlinedIcon />
      </IconButton>
      <IconButton color="primary" onClick={handleFlipped}>
        <Show when={!flipped}>
          <RemoveRedEyeOutlinedIcon />
        </Show>
        <Show when={flipped}>
          <VisibilityOffOutlinedIcon />
        </Show>
      </IconButton>
      <IconButton color="success" onClick={handleRemember}>
        <CheckOutlinedIcon />
      </IconButton>
    </Stack>
  )
}

export default QuizDeckActions;
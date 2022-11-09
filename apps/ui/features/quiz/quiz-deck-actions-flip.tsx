import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { IconButton } from "@mui/material";
import Show from '@ui/components/Show';
import { useAppDispatch } from '@ui/store/index';
import { useState } from 'react';
import { cardFlipped } from './quiz-slice';

const QuizDeckActionsFlip = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [flipped, setFlipped] = useState<boolean>(false);

  const handleFlipped = (): void => {
    setFlipped(flipped => !flipped);
    dispatch(cardFlipped());
  }

  return (
    <IconButton color="primary" onClick={handleFlipped}>
      <Show when={!flipped}>
        <RemoveRedEyeOutlinedIcon />
      </Show>
      <Show when={flipped}>
        <VisibilityOffOutlinedIcon />
      </Show>
    </IconButton>
  )
}

export default QuizDeckActionsFlip;
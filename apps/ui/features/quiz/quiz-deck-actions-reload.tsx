import ReplayIcon from '@mui/icons-material/Replay';
import { IconButton } from "@mui/material";
import { useAppDispatch } from '@ui/store/index';
import { cardsReload } from './quiz-slice';

const QuizDeckActionsReload = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleReload = (): void => {
    console.log('reload');
    dispatch(cardsReload());
    //Todo: should remove hard-reload
    window.location.reload();
  }

  return (
    <IconButton color="primary" onClick={handleReload}>
      <ReplayIcon />
    </IconButton>
  )
}

export default QuizDeckActionsReload;
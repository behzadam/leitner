import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { IconButton } from "@mui/material";
import { useAppSelector } from '@ui/store/index';
import { selectCurrentIndex } from './quiz-slice';

type QuizDeckActionsRememberProps = {
  onRemember: (index: number) => void;
}

const QuizDeckActionsRemember = ({ onRemember }: QuizDeckActionsRememberProps): JSX.Element => {
  const currentIndex = useAppSelector(selectCurrentIndex);

  const handleRemember = (): void => {
    // TODO: should update state
    onRemember(currentIndex)
  }

  return (
    <IconButton color="success" onClick={handleRemember}>
      <CheckOutlinedIcon />
    </IconButton>
  )
}

export default QuizDeckActionsRemember;
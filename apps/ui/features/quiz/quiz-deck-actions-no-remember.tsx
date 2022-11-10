import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { IconButton } from "@mui/material";
import { useAppSelector } from '@ui/store/index';
import { selectCurrentIndex } from './quiz-slice';

type QuizDeckActionsNoRememberProps = {
  onRemember: (index: number) => void;
};

const QuizDeckActionsNoRemember = ({ onRemember }: QuizDeckActionsNoRememberProps): JSX.Element => {
  const currentIndex = useAppSelector(selectCurrentIndex);

  const handleNoRemember = (): void => {
    onRemember(currentIndex)
  }

  return (
    <IconButton color="error" onClick={handleNoRemember}>
      <CloseOutlinedIcon />
    </IconButton>
  )
}

export default QuizDeckActionsNoRemember;
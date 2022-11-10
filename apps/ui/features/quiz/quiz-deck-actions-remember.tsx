import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { IconButton, IconButtonProps, styled } from "@mui/material";
import { useAppSelector } from '@ui/store/index';
import { selectCurrentIndex } from './quiz-slice';

const StyledIconButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: theme.palette.grey[50],
  '&:hover, &:focus': {
    backgroundColor: theme.palette.success.dark,
  }
}))

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
    <StyledIconButton onClick={handleRemember}>
      <CheckOutlinedIcon />
    </StyledIconButton>
  )
}

export default QuizDeckActionsRemember;
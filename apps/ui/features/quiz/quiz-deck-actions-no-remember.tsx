import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { IconButton } from "@mui/material";

const QuizDeckActionsNoRemember = (): JSX.Element => {

  const handleNoRemember = (): void => {
    console.log('handleNoRemember');
  }

  return (
    <IconButton color="error" onClick={handleNoRemember}>
      <CloseOutlinedIcon />
    </IconButton>
  )
}

export default QuizDeckActionsNoRemember;
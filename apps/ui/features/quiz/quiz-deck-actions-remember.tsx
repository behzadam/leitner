import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { IconButton } from "@mui/material";

const QuizDeckActionsRemember = (): JSX.Element => {

  const handleRemember = (): void => {
    console.log('handleRemember');
  }

  return (
    <IconButton color="success" onClick={handleRemember}>
      <CheckOutlinedIcon />
    </IconButton>
  )
}

export default QuizDeckActionsRemember;
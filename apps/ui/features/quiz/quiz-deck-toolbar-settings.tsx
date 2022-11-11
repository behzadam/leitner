import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { IconButton } from "@mui/material";
import { useDialogEvent } from '@ui/components/dialog/dialog.provider';
import QuizDeckFormFettings from './quiz-deck-form-settings';

const QuizDeckToolbarSettings = (): JSX.Element => {
  const { onOpenDialog } = useDialogEvent();

  return (
    <IconButton
      color="primary"
      onClick={
        () => onOpenDialog({
          content: <QuizDeckFormFettings />
        })
      }
    >
      <SettingsOutlinedIcon sx={{ fontSize: '1.2rem' }} />
    </IconButton>
  )
}

export default QuizDeckToolbarSettings;
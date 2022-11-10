import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { IconButton, Stack, Typography } from "@mui/material";
import QuizDeckToolbarProgress from './quiz-deck-toolbar-progress';


const QuizDeckToolbar = (): JSX.Element => {
  return (
    <Stack direction="row" alignItems="center" sx={{ maxWidth: '320px', width: '100%', mb: 1 }}>
      <Typography variant="overline" sx={{ fontWeight: 600, pr: 2 }}>Flashcards</Typography>
      <QuizDeckToolbarProgress />
      <Stack direction="row" spacing={1} sx={{ ml: 'auto' }}>
        <IconButton color="primary" size="medium">
          <SettingsOutlinedIcon sx={{ fontSize: '1.2rem' }} />
        </IconButton>
        <IconButton color="primary" size="medium">
          <AddCircleOutlineOutlinedIcon sx={{ fontSize: '1.2rem' }} />
        </IconButton>
      </Stack>
    </Stack >
  )
}

export default QuizDeckToolbar;
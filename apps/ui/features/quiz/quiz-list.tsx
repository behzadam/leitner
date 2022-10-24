import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import QuizListActions from './quiz-list-actions';
import QuizListStepper from './quiz-list-stepper';

import QuizListSwipeable from './quiz-list-swipeable';
import QuizListToolbar from './quiz-list-toolbar';
import QuizProvider from './quiz-provider';



type QuizListProps = {
  items?: any[]
  onCreate?: () => void
}


function QuizList({
  items = Array.of(1, 2, 3, 4, 5, 6, 7, 8)
}: QuizListProps) {
  console.log({ items });

  return (
    <QuizProvider>
      <Box sx={{ flexGrow: 1 }}>
        <QuizListToolbar />
        <QuizListSwipeable items={items} />
        <Grid container sx={{ mt: 1 }}>
          <Grid sx={{ flex: 1 }}>
            <QuizListStepper items={items} />
          </Grid>
          <Grid sx={{ py: 1, ml: 'auto' }}>
            <QuizListActions />
          </Grid>
        </Grid>
      </Box>
    </QuizProvider>
  );
}

export default QuizList;

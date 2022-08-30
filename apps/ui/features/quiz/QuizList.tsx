import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import FlashcardItem from "@ui/features/flashcard/FlashcardItem";
import { Grid, IconButton, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

type QuizListProps = {
  items?: any[]
  onCreate?: () => void
}

function QuizList({
  items = Array.of(1, 2, 3, 4, 5, 6, 7, 8)
}: QuizListProps) {
  console.log({ items })
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = items.length;

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number): void => {
    setActiveStep(step);
  };

  const onRemember = (id: number, rememberedIt: boolean): void => {
    console.log('onRemember', id, rememberedIt)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {items.map((_, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <FlashcardItem onRemember={(id, value) => onRemember(id, value)} />
              ) : null}
            </div>
          ))}
        </SwipeableViews>
      </Paper>
      <Grid container sx={{ mt: 1 }}>
        <Grid sx={{ flex: 1 }}>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <IconButton
                size="medium"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </IconButton>
            }
            backButton={
              <IconButton size="medium" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </IconButton>
            }
          />
        </Grid>
        <Grid sx={{ py: 1, ml: 'auto' }}>
          <IconButton size="medium" color="success">
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default QuizList;

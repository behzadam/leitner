import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Chip, Grid, IconButton, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import Show from '@ui/components/Show';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, bindKeyboard } from 'react-swipeable-views-utils';
import QuizListItem from './QuizListItem';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);
const AutoPlaySwipeableViews = autoPlay(BindKeyboardSwipeableViews);

type QuizListProps = {
  items?: any[]
  onCreate?: () => void
}

function QuizList({
  items = Array.of(1, 2, 3, 4, 5, 6, 7, 8)
}: QuizListProps) {
  console.log({ items })
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [autoplay, setAutoplay] = useState(false)
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

  const handleAutoPlay = (): void => {
    setAutoplay(autoplay => !autoplay);
  }

  const onRemember = (id: number, rememberedIt: boolean): void => {
    console.log('onRemember', id, rememberedIt)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          autoplay={autoplay}
        >
          {items.map((_, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <QuizListItem onRemember={(id, value) => onRemember(id, value)} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Paper>
      <Grid container sx={{ mt: 1 }}>
        <Grid sx={{ flex: 1 }}>
          <MobileStepper
            sx={{ border: 'none', background: 'none' }}
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
          <Show when={!autoplay}>
            <Chip variant="filled" label="Start" onClick={handleAutoPlay} size="medium" sx={{ mr: 1 }} />
          </Show>
          <Show when={autoplay}>
            <Chip variant="filled" label="Pause" onClick={handleAutoPlay} size="medium" sx={{ mr: 1 }} />
          </Show>
          <IconButton color="default" size="medium">
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default QuizList;

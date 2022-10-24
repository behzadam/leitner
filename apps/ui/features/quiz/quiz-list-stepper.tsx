import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { IconButton, MobileStepper, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { useQuizContext, useQuizEvent } from './quiz-provider';

type QuizListStepperType = {
  items?: any[]
}

const QuizListStepper = ({
  items
}: QuizListStepperType): JSX.Element => {
  const theme = useTheme();
  const { activeStep } = useQuizContext();
  const { onSetActiveStep } = useQuizEvent();


  const handleNext = (): void => {
    onSetActiveStep(activeStep + 1);
  };

  const handleBack = (): void => {
    onSetActiveStep(activeStep - 1);
  };

  const maxSteps = useMemo(() => {
    return items.length;
  }, [items])

  return (
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
  )
}

export default QuizListStepper;
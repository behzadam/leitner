import { useTheme } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, bindKeyboard } from 'react-swipeable-views-utils';
import QuizListItem from './quiz-list-item';
import { useQuizContext, useQuizEvent } from './quiz-provider';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);
const AutoPlaySwipeableViews = autoPlay(BindKeyboardSwipeableViews);

type QuizListSwipeableProps = {
  items: any[]
}

const QuizListSwipeable = ({ items }: QuizListSwipeableProps): JSX.Element => {
  const { onSetActiveStep } = useQuizEvent();
  const { activeStep, autoplay } = useQuizContext();
  const theme = useTheme();

  const handleStepChange = (step: number): void => {
    onSetActiveStep(step);
  };

  return (
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
            <QuizListItem />
          ) : null}
        </div>
      ))}
    </AutoPlaySwipeableViews>
  )
}
export default QuizListSwipeable;
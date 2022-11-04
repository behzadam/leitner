import { Box, BoxProps, styled } from '@mui/material';
import PlaceholderNoRow from '@ui/components/placeholder/placeholder-no-row';
import { RootState, useAppSelector } from '@ui/store/index';
import QuizDeck from './quiz-deck';
import QuizToolbox from './quiz-toolbox';

const QuizWrapper = styled(Box)<BoxProps>(() => ({
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '2rem',
  position: 'absolute',
  top: '0px',
  left: '0px',
  bottom: '0px',
  overflow: 'hidden',
  touchAction: 'none',
  backgroundColor: '#d4d4d4'
}));

const QuizInner = styled(Box)<BoxProps>(() => ({
  aspectRatio: '0.8',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px,1fr))',
  position: 'relative',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  borderRadius: '1.5rem',
  backgroundColor: '#e4e4e4'
}));

const QuizContainer = (): JSX.Element => {
  const quizState = useAppSelector<RootState>(state => state.quiz)
  return (
    <QuizWrapper>
      <QuizInner>
        <PlaceholderNoRow />
        <QuizDeck cards={quizState.cards} />
      </QuizInner>
      <Box sx={{ mt: 2 }}>
        <QuizToolbox />
      </Box>
    </QuizWrapper>
  );
}

export default QuizContainer;

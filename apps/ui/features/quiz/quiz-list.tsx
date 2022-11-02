import { Box, BoxProps, styled } from '@mui/material';
import { Flashcard } from '@ui/types';
import QuizActions from './quiz-actions';
import QuizDeck from './quiz-deck';
import QuizProvider from './quiz-provider';

const Wrapper = styled(Box)<BoxProps>(() => ({
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

const Inner = styled(Box)<BoxProps>(() => ({
  aspectRatio: '0.8',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px,1fr))',
  position: 'relative',
  backgroundColor: 'red'
}));

const QuizList = (): JSX.Element => {
  const cards: Flashcard[] = [
    { id: 1, front: 'Front card 1', back: 'Back card 1', isReady: true },
    { id: 2, front: 'Front card 2', back: 'Back card 2', isReady: true },
    { id: 3, front: 'Front card 3', back: 'Back card 3', isReady: true },
    { id: 4, front: 'Front card 4', back: 'Back card 4', isReady: true },
    { id: 5, front: 'Front card 5', back: 'Back card 5', isReady: false },
    { id: 6, front: 'Front card 6', back: 'Back card 6', isReady: false },
    { id: 7, front: 'Front card 7', back: 'Back card 7', isReady: false },
    { id: 8, front: 'Front card 8', back: 'Back card 8', isReady: false },
    { id: 9, front: 'Front card 9', back: 'Back card 9', isReady: false },
  ]
  return (
    <QuizProvider>
      <Wrapper>
        <Inner>
          <QuizDeck cards={cards} />
        </Inner>
        <Box sx={{ mt: 2 }}>
          <QuizActions />
        </Box>
      </Wrapper>
    </QuizProvider>
  );
}

export default QuizList;

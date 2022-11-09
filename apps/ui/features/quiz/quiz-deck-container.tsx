import { Box, BoxProps, styled } from '@mui/material';
import PlaceholderNoRow from '@ui/components/placeholder/placeholder-no-row';
import Show from '@ui/components/Show';
import { useAppDispatch, useAppSelector } from '@ui/store/index';
import QuizDeck from './quiz-deck';
import QuizDeckActions from './quiz-deck-actions';
import { cardSwiped, selectCurrentIndex, selectFlashcards, selectFlashcardsCount } from './quiz-slice';

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

const QuizDeckContainer = (): JSX.Element => {
  const cards = useAppSelector(selectFlashcards);
  const cardsCount = useAppSelector(selectFlashcardsCount);
  const currentIndex = useAppSelector(selectCurrentIndex);
  const dispatch = useAppDispatch()

  const handleCardSwiped = (): void => {
    dispatch(cardSwiped())
  }

  return (
    <QuizWrapper>
      <QuizInner>
        <PlaceholderNoRow />
        <QuizDeck cards={cards} onSwiped={handleCardSwiped} />
      </QuizInner>
      <Box sx={{ mt: 2 }}>
        <Show when={currentIndex < cardsCount}>
          <QuizDeckActions />
        </Show>
      </Box>
    </QuizWrapper>
  );
}

export default QuizDeckContainer;

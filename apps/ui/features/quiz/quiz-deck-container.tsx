import { useAppDispatch, useAppSelector } from '@ui/store/index';

import QuizDeck from './quiz-deck';
import { cardSwiped, selectFlashcards } from './quiz-slice';
import { SwipeDirection } from './quiz-types';


const QuizDeckContainer = (): JSX.Element => {
  const cards = useAppSelector(selectFlashcards);
  const dispatch = useAppDispatch();

  return (
    <QuizDeck
      cards={cards}
      onSwiped={
        (direction: SwipeDirection) => dispatch(cardSwiped(direction))
      } />
  );
}

export default QuizDeckContainer;

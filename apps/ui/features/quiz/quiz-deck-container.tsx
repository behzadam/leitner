import { useAppDispatch, useAppSelector } from '@ui/store/index';

import QuizDeck from './quiz-deck';
import { cardSwiped, selectFlashcards } from './quiz-slice';


const QuizDeckContainer = (): JSX.Element => {
  const cards = useAppSelector(selectFlashcards);
  const dispatch = useAppDispatch()

  const handleCardSwiped = (): void => {
    dispatch(cardSwiped())
  }

  return (
    <QuizDeck cards={cards} onSwiped={handleCardSwiped} />
  );
}

export default QuizDeckContainer;

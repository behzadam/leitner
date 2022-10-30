import { Flashcard } from '@ui/types';
import QuizDeck from './quiz-deck';
import QuizProvider from './quiz-provider';

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
      <QuizDeck cards={cards} />
    </QuizProvider>
  );
}

export default QuizList;

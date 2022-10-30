import QuizDeck from './quiz-deck';

import QuizProvider from './quiz-provider';

type QuizListProps = {
  items?: any[]
  onCreate?: () => void
}

const QuizList = ({
  items = Array.of(1, 2, 3, 4, 5, 6, 7, 8)
}: QuizListProps): JSX.Element => {
  console.log({ items });

  return (
    <QuizProvider>
      <QuizDeck />
    </QuizProvider>
  );
}

export default QuizList;

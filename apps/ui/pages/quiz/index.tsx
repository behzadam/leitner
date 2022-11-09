import LayoutNested from '@ui/components/layout/layout-nested';
import QuizDeckContainer from '@ui/features/quiz/quiz-deck-container';
import { NextPageWithLayout } from '@ui/types';
import { ReactElement } from 'react';

const Index: NextPageWithLayout = (): JSX.Element => {
  return (
    <QuizDeckContainer />
  );
}

Index.layout = function layout(page: ReactElement) {
  return (
    <LayoutNested>{page}</LayoutNested>
  )
}

export default Index;
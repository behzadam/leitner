import LayoutNested from '@ui/components/layout/layout-nested';
import QuizContainer from '@ui/features/quiz/quiz-container';
import { NextPageWithLayout } from '@ui/types';
import { ReactElement } from 'react';

const Index: NextPageWithLayout = (): JSX.Element => {
  return (
    <QuizContainer />
  );
}

Index.layout = function layout(page: ReactElement) {
  return (
    <LayoutNested>{page}</LayoutNested>
  )
}

export default Index;
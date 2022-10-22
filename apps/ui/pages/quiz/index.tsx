import { Container } from '@mui/material';
import LayoutNested from '@ui/components/layout/layout-nested';
import QuizList from '@ui/features/quiz/QuizList';
import { NextPageWithLayout } from '@ui/types';
import { ReactElement } from 'react';

const Index: NextPageWithLayout = (): JSX.Element => {
  return (
    <Container maxWidth='sm' sx={{ mt: 4 }}>
      <QuizList />
    </Container>
  );
}

Index.layout = function layout(page: ReactElement) {
  return (
    <LayoutNested>{page}</LayoutNested>
  )
}

export default Index;
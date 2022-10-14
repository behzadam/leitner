import { Container } from '@mui/material';
import LayoutNestedFull from '@ui/components/Layout/LayoutNestedFull';
import QuizList from '@ui/features/quiz/QuizList';
import { NextPageWithLayout } from '@ui/types';
import { ReactElement } from 'react';

const Index: NextPageWithLayout = (): JSX.Element => {
  return (
    <Container maxWidth='sm' sx={{ mt: -4 }}>
      <QuizList />
    </Container>
  );
}

Index.layout = function layout(page: ReactElement) {
  return (
    <LayoutNestedFull>{page}</LayoutNestedFull>
  )
}

export default Index;
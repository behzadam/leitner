import { Container } from '@mui/material';
import LayoutNestedFull from '@ui/components/Layout/LayoutNestedFull';
import QuizList from '@ui/features/quiz/QuizList';
import QuizListToolbar from '@ui/features/quiz/QuizListToolbar';



const Index = (): JSX.Element => {
  return (
    <LayoutNestedFull>
      <Container maxWidth='sm' sx={{ mt: -4 }}>
        <QuizListToolbar />
        <QuizList />
      </Container>
    </LayoutNestedFull>
  );
}

export default Index;
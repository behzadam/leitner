import FlashcardListDemo from '@ui/features/flashcard/FlashcardListDemo'
import { NextPageWithLayout } from '@ui/types';

const Index: NextPageWithLayout = (): JSX.Element => {
  return (
    <FlashcardListDemo />
  );
}

Index.layout = 'dashboard'
export default Index;

import LayoutNested from '@ui/components/layout/layout-nested';
import FlashcardList from '@ui/features/flashcard/flashcard-list';
import { NextPageWithLayout } from '@ui/types';
import { ReactElement } from 'react';

const Index: NextPageWithLayout = (): JSX.Element => {
  return (
    <FlashcardList />
  )
}

Index.layout = function layout(page: ReactElement) {
  return (
    <LayoutNested>{page}</LayoutNested>
  )
}
export default Index;
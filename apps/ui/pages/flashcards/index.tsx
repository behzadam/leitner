import LayoutNested from '@ui/components/Layout/LayoutNested';
import FlashcardListDemo from '@ui/features/flashcard/list/FlashcardListDemo';
import { NextPageWithLayout } from '@ui/types';
import { ReactElement } from 'react';

const Index: NextPageWithLayout = (): JSX.Element => {
  return (
    <FlashcardListDemo />
  )
}

Index.layout = function layout(page: ReactElement) {
  return (
    <LayoutNested>{page}</LayoutNested>
  )
}
export default Index;
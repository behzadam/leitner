import LayoutNested from '@ui/components/Layout/LayoutNested';
import FlashcardListHistory from '@ui/features/flashcard/Flashcard.list.history';
import { NextPageWithLayout } from '@ui/types';
import { ReactElement } from 'react';


const Index: NextPageWithLayout = ({ id }): JSX.Element => {
  return (
    <FlashcardListHistory id={id} />
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      id: params.id
    }
  }
}

Index.layout = function layout(page: ReactElement) {
  return (
    <LayoutNested>{page}</LayoutNested>
  )
}

export default Index;
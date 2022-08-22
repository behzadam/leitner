import FlashcardListHistory from '@ui/features/flashcard/Flashcard.list.history'

export function Index({ id }) {
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

export default Index;
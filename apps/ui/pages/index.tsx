import FlashcardList from '@ui/features/flashcard/Flashcard.list'
import useFlashcardList from "@ui/features/flashcard/hooks/useFlashcardList";

export function Index() {
  const { items } = useFlashcardList();
  return (
    <FlashcardList items={items} />
  );
}

export default Index;

import FlashcardList from '@/features/flashcard/Flashcard.list'
import useFlashcardList from "@/features/flashcard/hooks/useFlashcardList";

export function Index() {
  const { items } = useFlashcardList();
  return (
    <FlashcardList items={items} />
  );
}

export default Index;

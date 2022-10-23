import Show from "@ui/components/Show";
import { useEffect, useState } from "react";

const FlashcardListActionEdit = ({
  currentRowId,
  setCurrentRowId
}: {
  currentRowId?: number,
  setCurrentRowId: (id?: number) => void
}): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!currentRowId) return setOpen(false);
    setOpen(true);
  }, [currentRowId])

  const onClose = (): void => {
    setCurrentRowId(null)
    setOpen(false)
  }

  return (
    <Show when={open}>
      <FlashcardEditDialog id={currentRowId} open={open} onClose={onClose} />
    </Show>
  )
}

export default FlashcardListActionEdit;
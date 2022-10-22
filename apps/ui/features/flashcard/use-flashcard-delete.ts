import useConfirm from '@ui/components/confirm/use-confirm';

export const useFlashcardDelete = () => {
  const { onOpenConfirm } = useConfirm();

  const onDelete = async (id: number): Promise<void> => {
    const confirmed = await onOpenConfirm({
      title: 'Delete',
      message: 'Are you sure you want to delete this item?',
    });

    if (confirmed) {
      console.log('onDelete is confirmed', id);
    } else {
      console.log('onDelete is not confirmed', id);
    }
  };

  return {
    onDelete,
  };
};

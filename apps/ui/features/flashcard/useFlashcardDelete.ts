import useDialogConfirm from '@ui/components/dialog/useDialogConfirm';

const useFlashcardDelete = () => {
  const { open } = useDialogConfirm();

  const handleDeleteRows = async (): Promise<void> => {
    const isConfirmed = await open();
    if (isConfirmed) {
      console.log('Delete rows');
    } else {
      console.log('Declined');
    }
  };

  return {
    handleDeleteRows,
  };
};

export default useFlashcardDelete;

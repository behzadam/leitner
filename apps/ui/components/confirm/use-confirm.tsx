import { useConfirmContext, useConfirmEvent } from "./confirm.provider";

const useConfirm = () => {
  const { onOpen, onDecline, onConfirm } = useConfirmEvent();
  const { options } = useConfirmContext();

  const openConfirm = (): Promise<boolean> => {
    return new Promise((resolve) => {
      onOpen({
        resolve: resolve,
        message: "confirm"
      });
    });
  };

  const confirm = async (): Promise<void> => {
    onConfirm();
    options.resolve?.(true);
  }

  const decline = async (): Promise<void> => {
    onDecline();
    options.resolve?.(false);
  }

  return {
    openConfirm,
    confirm,
    decline
  }
}

export default useConfirm;
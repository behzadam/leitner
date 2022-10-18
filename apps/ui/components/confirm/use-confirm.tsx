import { useConfirmContext, useConfirmEvent } from "./confirm.provider";

const useConfirm = () => {
  const dialog = useConfirmEvent();
  const { options } = useConfirmContext();

  const onOpenConfirm = (): Promise<boolean> => {
    return new Promise((resolve) => {
      dialog.onOpenConfirm({
        resolve: resolve,
        message: "confirm"
      });
    });
  };

  const onAcceptConfirm = async (): Promise<void> => {
    dialog.onAcceptConfirm();
    options.resolve?.(true);
  }

  const onDeclineConfirm = async (): Promise<void> => {
    dialog.onDeclineConfirm();
    options.resolve?.(false);
  }

  return {
    onOpenConfirm,
    onAcceptConfirm,
    onDeclineConfirm
  }
}

export default useConfirm;
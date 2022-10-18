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
    options.resolve?.(true);
    dialog.onAcceptConfirm();
  }

  const onDeclineConfirm = async (): Promise<void> => {
    options.resolve?.(false);
    dialog.onDeclineConfirm();
  }

  return {
    onOpenConfirm,
    onAcceptConfirm,
    onDeclineConfirm
  }
}

export default useConfirm;
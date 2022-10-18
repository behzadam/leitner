import { ConfirmOptions, useConfirmContext, useConfirmEvent } from "./confirm.provider";

const useConfirm = () => {
  const dialog = useConfirmEvent();
  const { options } = useConfirmContext();

  const onOpenConfirm = async (
    options?: Partial<ConfirmOptions>
  ): Promise<boolean> => {
    return new Promise((resolve) => {
      dialog.onOpenConfirm({ ...options, resolve: resolve });
    });
  }

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
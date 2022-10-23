import { ConfirmOptions, useConfirmEvent } from "./confirm-provider";

const useConfirm = () => {
  const { onOpen } = useConfirmEvent();

  const onOpenConfirm = async (
    options?: Partial<ConfirmOptions>
  ): Promise<boolean> => {
    return new Promise((resolve) => {
      onOpen({ ...options, resolve: resolve });
    });
  }

  return {
    onOpenConfirm
  }
}

export default useConfirm;
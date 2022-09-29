import {
  AppDispatch,
  RootState,
  useAppDispatch,
  useAppSelector,
} from '@ui/store/index';
import { dialogConfirmSliceActions } from './dialogConfirmSlice';
import dialogConfirmThunkActions from './dialogThunkActions';

const useDialogConfirm = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { isOpened } = useAppSelector((state: RootState) => ({
    isOpened: state.dialogConfirm.isOpened,
  }));

  const open = async () => {
    const { payload } = await dispatch(
      dialogConfirmThunkActions.open()
    );
    return payload;
  };

  const confirm = () => {
    return dispatch(dialogConfirmSliceActions.confirm());
  };

  const decline = () => {
    return dispatch(dialogConfirmSliceActions.decline());
  };

  return {
    isOpened,
    open,
    confirm,
    decline,
  };
};

export default useDialogConfirm;

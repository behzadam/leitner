/**
 * ref: https://wanago.io/2021/04/26/generic-confirmation-modal-redux-redux-toolkit-typescript/
 */
import { createAsyncThunk, Unsubscribe } from '@reduxjs/toolkit';
import { RootState } from '@ui/store/index';
import { ThunkExtraArguments } from '@ui/types';
import { dialogConfirmSliceActions } from './dialogConfirmSlice';

const dialogConfirmThunkActions = {
  open: createAsyncThunk<
    boolean,
    void,
    {
      extra: ThunkExtraArguments;
    }
  >(
    'dialogConfirm',
    async (_, { extra, dispatch }): Promise<boolean> => {
      const store = extra.store;

      dispatch(dialogConfirmSliceActions.open());

      return new Promise<boolean>((resolve) => {
        const unsubscribe: Unsubscribe = store.subscribe(() => {
          const state: RootState = store.getState();
          if (state.dialogConfirm.isConfirmed) {
            unsubscribe();
            resolve(true);
          }
          if (state.dialogConfirm.isDeclined) {
            unsubscribe();
            resolve(false);
          }
        });
      });
    }
  ),
};

export default dialogConfirmThunkActions;

import {
  configureStore,
  combineReducers,
  AnyAction,
  CombinedState,
  ThunkAction,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { Reducer } from '@reduxjs/toolkit';
import { Action } from 'redux';
import flashcardReducer, { FlashcardState } from '@/store/flashcard-slice';

export interface RootState {
  flashcard: FlashcardState;
}

const combinedState = combineReducers({
  flashcard: flashcardReducer,
});

const rootReducer = (
  state: RootState,
  action: AnyAction
): CombinedState<RootState> => {
  if (action.type === HYDRATE) return { ...state, ...action.payload };
  return combinedState(state, action);
};

export const makeStore = () =>
  configureStore({
    reducer: rootReducer as Reducer<CombinedState<RootState>, AnyAction>,
    devTools: process.env.NODE_ENV === 'development',
  });

export const wrapper = createWrapper(makeStore);
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

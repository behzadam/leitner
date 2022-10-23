import { createContext, useContext, useMemo, useReducer } from 'react';

import Confirm from './confirm';

export type ConfirmOptions = {
  title?: string;
  message?: string;
  resolve?: (value: boolean) => void;
}

export type ConfirmState = {
  isOpened: boolean;
  isConfirmed: boolean;
  isDeclined: boolean;
  options?: ConfirmOptions;
}

export type ConfirmAction =
  | { type: 'CONFIRM_OPENED', payload?: ConfirmOptions }
  | { type: 'CONFIRM_CONFIRMED' }
  | { type: 'CONFIRM_DECLINED' }

export type ConfirmEvent = {
  onOpen: (options?: Partial<ConfirmOptions>) => void;
}

const initialOptions: ConfirmOptions = {
  title: null,
  message: null,
  resolve: null
}

const initialState: ConfirmState = {
  isOpened: false,
  isConfirmed: false,
  isDeclined: false,
  options: { ...initialOptions }
}

const reducer = (state: ConfirmState, action: ConfirmAction): ConfirmState => {
  switch (action.type) {
    case 'CONFIRM_OPENED':
      return { ...initialState, isOpened: true, options: { ...action.payload } }
    case 'CONFIRM_DECLINED':
      return { ...initialState, isDeclined: true, options: { ...state.options } }
    case 'CONFIRM_CONFIRMED':
      return { ...initialState, isConfirmed: true, options: { ...state.options } }
    default:
      return initialState;
  }
}

export const ConfirmContext = createContext<ConfirmState>({} as ConfirmState);
export const ConfirmEvent = createContext<ConfirmEvent>({} as ConfirmEvent);

const ConfirmProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchEvent = useMemo(() => {
    const onOpen = (options: Partial<ConfirmOptions>): void => {
      dispatch({ type: 'CONFIRM_OPENED', payload: options })
    }

    const onDeclineConfirm = (): void => {
      dispatch({ type: 'CONFIRM_DECLINED' });
      state.options?.resolve?.(false);
    }

    const onAcceptConfirm = (): void => {
      dispatch({ type: 'CONFIRM_CONFIRMED' });
      state.options?.resolve?.(true);
    }

    return {
      onOpen,
      onAcceptConfirm,
      onDeclineConfirm
    }
  }, [state])


  return (
    <ConfirmContext.Provider value={state}>
      <ConfirmEvent.Provider value={dispatchEvent}>
        {children}
        <Confirm
          open={state.isOpened}
          title={state.options.title}
          message={state.options.message}
          confirm={dispatchEvent.onAcceptConfirm}
          decline={dispatchEvent.onDeclineConfirm}
        />
      </ConfirmEvent.Provider>
    </ConfirmContext.Provider>
  )
}

export const useConfirmContext = (): ConfirmState => useContext(ConfirmContext);
export const useConfirmEvent = (): ConfirmEvent => useContext(ConfirmEvent);
export default ConfirmProvider;
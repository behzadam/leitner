import { createContext, useContext, useMemo, useReducer } from 'react';
import Confirm from "./confirm";

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
  onOpen: (options?: ConfirmOptions) => void;
  onDecline: () => void;
  onConfirm: () => void;
}

const initialOptions: ConfirmOptions = {
  title: 'Confirm',
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
      return { ...state, isOpened: true, options: { ...action.payload } }
    case 'CONFIRM_DECLINED':
      return { ...initialState, isOpened: false, isDeclined: true }
    case 'CONFIRM_CONFIRMED':
      return { ...initialState, isOpened: false, isConfirmed: true }
    default:
      return state;
  }
}

export const ConfirmContext = createContext<ConfirmState>({} as ConfirmState);
export const ConfirmEvent = createContext<ConfirmEvent>({} as ConfirmEvent);

const ConfirmProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchContext = useMemo(() => {
    const onOpen = (options: Partial<ConfirmOptions>): void => {
      dispatch({ type: 'CONFIRM_OPENED', payload: { ...options } })
    }

    const onDecline = (): void => {
      dispatch({ type: 'CONFIRM_DECLINED' })
    }

    const onConfirm = (): void => {
      dispatch({ type: 'CONFIRM_CONFIRMED' })
    }

    return {
      onOpen,
      onDecline,
      onConfirm
    }
  }, [])

  return (
    <ConfirmContext.Provider value={state}>
      <ConfirmEvent.Provider value={dispatchContext}>
        {children}
        <Confirm />
      </ConfirmEvent.Provider>
    </ConfirmContext.Provider>
  )
}

export const useConfirmContext = (): ConfirmState => useContext(ConfirmContext);
export const useConfirmEvent = (): ConfirmEvent => useContext(ConfirmEvent);
export default ConfirmProvider;
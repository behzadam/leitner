import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { createContext, ReactNode, useContext, useMemo, useReducer } from 'react';
import Show from "../Show";

export type DialogOptions = {
  title?: string;
  content?: ReactNode;
}

export type DialogState = {
  isOpened: boolean;
  options?: DialogOptions;
}

export type DialogAction =
  | { type: 'DIALOG_OPEN', payload?: DialogOptions }
  | { type: 'DIALOG_CLOSE' }

export type DialogEvent = {
  onOpen: (options?: DialogOptions) => void;
  onClose: () => void;
}

const initialOptions: DialogOptions = {
  title: null,
  content: null
}

const initialState: DialogState = {
  isOpened: false,
  options: { ...initialOptions }
}

const reducer = (state: DialogState, action: DialogAction): DialogState => {
  switch (action.type) {
    case 'DIALOG_OPEN':
      return { ...state, isOpened: true, options: action.payload }
    case 'DIALOG_CLOSE':
      return { ...state, isOpened: false, options: initialOptions }
    default:
      return state;
  }
}

export const DialogContext = createContext<DialogState>({} as DialogState);
export const DialogEvent = createContext<DialogEvent>({} as DialogEvent);

const DialogProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchContext = useMemo(() => {
    const onOpen = (options: Partial<DialogOptions> = initialOptions): void => {
      dispatch({ type: 'DIALOG_OPEN', payload: options })
    }

    const onClose = (): void => {
      dispatch({ type: 'DIALOG_CLOSE' })
    }

    return {
      onOpen,
      onClose
    }
  }, [])

  return (
    <DialogContext.Provider value={state}>
      <DialogEvent.Provider value={dispatchContext}>
        {children}
        <Dialog open={state.isOpened} onClose={dispatchContext.onClose}>
          <Show when={state.options?.title}>
            <DialogTitle>{state.options?.title}</DialogTitle>
          </Show>
          <DialogContent>
            {state.options?.content}
          </DialogContent>
        </Dialog>
      </DialogEvent.Provider>
    </DialogContext.Provider>
  )
}

export const useDialogContext = (): DialogState => useContext(DialogContext);
export const useDialogEvent = (): DialogEvent => useContext(DialogEvent);
export default DialogProvider;
import { Container } from '@mui/material';
import { createContext, useContext, useMemo, useReducer } from 'react';

import FlashcardListDataGrid from './FlashcardListDataGrid';
import FlashcardListToolbar from './FlashcardListToolbar';

export type State = {
  currentRow?: number;
  currentRows: number[]
}

export type Actions =
  | { type: 'setCurrentRow', row: number | null }
  | { type: 'setCurrentRows', rows: number[] };

export type DispatchContext = {
  setCurrentRow: (row?: number) => void;
  setCurrentRows: (rows: number[]) => void;
}

export const initialState: State = {
  currentRows: [],
  currentRow: null
}

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'setCurrentRow':
      return { ...state, currentRow: action.row }
    case 'setCurrentRows':
      return { ...state, currentRows: action.rows }
    default:
      return initialState;
  }
}

const FlashcardListContext = createContext<State>({} as State);
const FlashcardListDispatchContext = createContext<DispatchContext>({} as DispatchContext);

const FlashcardListProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchContext: DispatchContext = useMemo(() => {
    const setCurrentRow = (row?: number): void => {
      console.log('dispatchContext', row)
      dispatch({ type: 'setCurrentRow', row })
    }

    const setCurrentRows = (rows: number[]): void => {
      console.log('dispatchContext', rows)
      dispatch({ type: 'setCurrentRows', rows })
    }

    return {
      setCurrentRow,
      setCurrentRows
    }
  }, [])

  return (
    <FlashcardListContext.Provider value={state}>
      <FlashcardListDispatchContext.Provider value={dispatchContext}>
        {children}
      </FlashcardListDispatchContext.Provider>
    </FlashcardListContext.Provider>
  )
}

const FlashcardListDemo = (): JSX.Element => {
  return (
    <FlashcardListProvider>
      <Container maxWidth="md" sx={{ height: 422, mt: 4 }}>
        <FlashcardListToolbar />
        <FlashcardListDataGrid />
      </Container>
    </FlashcardListProvider>
  )
}

export default FlashcardListDemo;
export const useFlashcardListContext = (): State => useContext(FlashcardListContext)
export const useFlashcardListDispatchContext = (): DispatchContext => useContext(FlashcardListDispatchContext)
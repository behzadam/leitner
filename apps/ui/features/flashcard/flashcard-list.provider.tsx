import { createContext, useMemo, useReducer } from 'react';

export type FlashcardListState = {
  currentRow?: number;
  currentRows: number[]
}

export type FlashcardListAction =
  | { type: 'setCurrentRow', row?: number }
  | { type: 'setCurrentRows', rows: number[] };

export type FlashcardListEvent = {
  setCurrentRow: (row?: number) => void;
  setCurrentRows: (rows: number[]) => void;
}

export const initialState: FlashcardListState = {
  currentRows: []
}

const reducer = (state: FlashcardListState, action: FlashcardListAction): FlashcardListState => {
  switch (action.type) {
    case 'setCurrentRow':
      return { ...state, currentRow: action.row }
    case 'setCurrentRows':
      return { ...state, currentRows: action.rows }
    default:
      return initialState;
  }
}

export const FlashcardListContext = createContext<FlashcardListState>({} as FlashcardListState);
export const FlashcardListEventContext = createContext<FlashcardListEvent>({} as FlashcardListEvent);

const FlashcardListProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchContext: FlashcardListEvent = useMemo(() => {
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
      <FlashcardListEventContext.Provider value={dispatchContext}>
        {children}
      </FlashcardListEventContext.Provider>
    </FlashcardListContext.Provider>
  )
}

export default FlashcardListProvider;
import { createContext, useContext, useMemo, useReducer } from 'react';

export type QuizState = {
  activeStep: number;
  autoplay: boolean;
};

export type QuizAction =
  | { type: 'setActiveStep', payload: number }
  | { type: 'setAutoplay', payload: boolean };

export type QuizEvent = {
  onSetActiveStep: (step: number) => void;
  onSetAutoplay: (autoplay: boolean) => void;
};

const initialState: QuizState = {
  activeStep: 0,
  autoplay: false
};


const reducer = (state: QuizState, action: QuizAction): QuizState => {
  switch (action.type) {
    case 'setActiveStep':
      return { ...state, activeStep: action.payload }
    case 'setAutoplay':
      return { ...state, autoplay: action.payload }
    default:
      return initialState;
  }
}

export const QuizContext = createContext<QuizState>({} as QuizState);
export const QuizEvent = createContext<QuizEvent>({} as QuizEvent);

const QuizProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchEvent = useMemo(() => {
    const onSetActiveStep = (activeStep: number): void => {
      dispatch({ type: 'setActiveStep', payload: activeStep });
    }

    const onSetAutoplay = (autoplay: boolean): void => {
      dispatch({ type: 'setAutoplay', payload: autoplay });
    }

    return {
      onSetActiveStep,
      onSetAutoplay
    }
  }, [])

  return (
    <QuizContext.Provider value={state}>
      <QuizEvent.Provider value={dispatchEvent}>
        {children}
      </QuizEvent.Provider>
    </QuizContext.Provider>
  )
}

export const useQuizContext = (): QuizState => useContext(QuizContext);
export const useQuizEvent = (): QuizEvent => useContext(QuizEvent);
export default QuizProvider;
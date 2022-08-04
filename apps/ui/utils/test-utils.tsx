// reference: https://redux.js.org/usage/writing-tests 
/*
import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState, } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import type { RootState } from '@/store/index'
import flashcardReducer from '@/features/flashcard/FlashcardSlice'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: RootState
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      flashcard: null
    },
    store = configureStore({ reducer: { flashcards: flashcardReducer }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
**/
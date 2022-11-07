import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type Flashcard = {
  id: number;
  front: string;
  back?: string;
  remembered: boolean;
  flipped: boolean;
};

// API
export type ApiStatus = 'IDLE' | 'PENDING' | 'SUCCEEDED' | 'FAILED';

// Layout
export type Layout = 'dashboard' | 'nested';

// NextJS
export type NextPageWithLayout<
  P = Record<string, never>,
  IP = P
> = NextPage<P, IP> & {
  layout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type Optional<T, K extends keyof T> = Partial<T> & Omit<T, K>;

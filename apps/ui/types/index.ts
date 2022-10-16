import { Store } from '@reduxjs/toolkit';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type ThunkExtraArguments = {
  store: Store;
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

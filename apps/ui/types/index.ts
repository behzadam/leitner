import { NextPage } from 'next';
import { AppProps } from 'next/app';

// API
export type ApiStatus = 'IDLE' | 'PENDING' | 'SUCCEEDED' | 'FAILED';

// Layout
export type Layout = 'dashboard' | 'nested';

// NextJS
export type NextPageWithLayout = NextPage & {
  layout?: Layout;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

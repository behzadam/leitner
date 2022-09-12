import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

// API
export type ApiStatus = 'IDLE' | 'PENDING' | 'SUCCEEDED' | 'FAILED';

// NextJS
// export type NextPageWithLayout = NextPage & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };

export type NextPageWithLayout = NextPage & {
  layout?: string;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

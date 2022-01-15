import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { OneColumnLayout } from '@layout/one-column-layout';
import { Provider as LayoutProvider } from 'reactjs-slot-layout/dist';
import { Provider } from 'react-redux';
import { store } from '@redux/store';

const layouts = {
  OneColumn: OneColumnLayout,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider value={layouts}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </LayoutProvider>
  );
}

export default MyApp;

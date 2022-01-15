import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { OneColumnLayout } from '@layout/one-column-layout';
import { Provider as LayoutProvider } from 'reactjs-slot-layout/dist';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const layouts = {
  OneColumn: OneColumnLayout,
};

function MyApp({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store);
  return (
    <LayoutProvider value={layouts}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </LayoutProvider>
  );
}

export default MyApp;

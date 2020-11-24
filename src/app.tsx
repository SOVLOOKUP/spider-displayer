import * as React from 'react';
import { createApp } from 'ice';
import AplProvider from '@/components/ApolloProvider'

const appConfig = {
  app: {
    rootId: 'ice-container',
    addProvider: ({ children }) => (
      <AplProvider >
          {children}
      </AplProvider>

    ),
  },
};

createApp(appConfig);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './_pds/theme';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./_mocks/browser');
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);

import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { theme } from '../_pds/theme';

const TestProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default TestProviders;

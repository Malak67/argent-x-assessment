import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { theme } from './theme';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

type ArgentThemeProps = {
  children: React.ReactNode;
};

export const ArgentThemeProvider: FC<ArgentThemeProps> = ({
  children,
}: ArgentThemeProps) => {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};

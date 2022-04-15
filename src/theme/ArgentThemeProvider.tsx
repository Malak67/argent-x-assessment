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

export const ArgentThemeProvider: FC<ArgentThemeProps> = (
  props: ArgentThemeProps
) => {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </CacheProvider>
  );
};

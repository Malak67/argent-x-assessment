import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ArgentThemeProvider } from './theme';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { Mainnet, DAppProvider, Config } from '@usedapp/core';
import { rpcUrl } from './constants';

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: rpcUrl,
  },
  multicallVersion: 2,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ArgentThemeProvider>
      <CssBaseline />
      <DAppProvider config={config}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DAppProvider>
    </ArgentThemeProvider>
  </React.StrictMode>
);
reportWebVitals();

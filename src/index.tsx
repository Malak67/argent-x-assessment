import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ArgentThemeProvider } from './theme'
import reportWebVitals from './reportWebVitals'
import CssBaseline from '@mui/material/CssBaseline'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <ArgentThemeProvider>
      <CssBaseline />
      <App />
    </ArgentThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

import { createTheme, Theme, ThemeOptions } from '@mui/material/styles'

const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#ff875b',
      dark: '#f36a3d',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#070707',
      dark: '#070707',
      contrastText: '#FFFFFF'
    },
    info: {
      main: '#8A9294',
      contrastText: '#FFFFFF'
    },
    error: {
      main: '#E74A50'
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0',
          padding: '8px 16px',
          fontSize: '15px',
          lineHeight: '30px',
          width: 'auto',
          minWidth: '200px'
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '60px'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          lineHeight: '1.6'
        },
        h1: {
          fontWeight: 500,
          fontSize: '3.5rem'
        },
        h2: {
          fontWeight: 400,
          fontSize: '2rem'
        },
        h3: {
          fontWeight: 400,
          fontSize: '1.5rem'
        },
        h4: {
          fontWeight: 400,
          fontSize: '1.3rem'
        },
        h5: {
          fontWeight: 400,
          fontSize: '1rem'
        }
      }
    }
  }
}

export const theme: Theme = createTheme(lightTheme)

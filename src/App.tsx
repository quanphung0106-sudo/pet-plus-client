import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import { NotificationProvider } from './components/Notification'
import './styles/globals.scss'
import './styles/reset_styles.scss'
import { StyledEngineProvider } from './themeProvider/StyledEngineProvider'
import AppRouter from './router'
import theme from './themeProvider/ThemeProvider'

function App() {
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          autoHideDuration={3000}
          maxSnack={3}
        >
          <AppRouter />
          <NotificationProvider />
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App

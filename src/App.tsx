import React from 'react'
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from 'themeProvider/ThemeProvider'
import AppRouter from 'router'
import { SnackbarProvider } from 'notistack'
import { NotificationProvider } from './components/Notification'

function App() {
  return (
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
  )
}

export default App

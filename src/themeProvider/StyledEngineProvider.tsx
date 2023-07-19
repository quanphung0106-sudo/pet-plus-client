import { StyledEngineProvider as MUIStyledEngineProvider } from '@mui/material/styles'

export const StyledEngineProvider = (props: { children: JSX.Element }) => {
  return <MUIStyledEngineProvider injectFirst>{props.children}</MUIStyledEngineProvider>
}

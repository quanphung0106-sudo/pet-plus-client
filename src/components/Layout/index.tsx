import { Menu } from '@mui/icons-material'
import { Box, BoxProps, CssBaseline, Drawer, IconButton, Toolbar, styled } from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { useEffect } from 'react'
import { BreakPoints } from 'src/constants/AppConstants'
import { useWindowSize } from 'src/hook'
import { useActionStore } from 'src/store/action-store'
import SideMenu from './SideMenu'
import styles from './style.module.scss'

interface Props extends BoxProps {}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const drawerWidth = 260

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(1.5),
  height: '100vh',
  overflowY: 'auto',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `${drawerWidth}px`,
  }),
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

export function Layout(props: Props) {
  const { children } = props
  const windowSize = useWindowSize()
  const { dispatchAction } = useActionStore()
  const action = useActionStore((store) => store.action?.status)
  const mobileOpen = action === undefined ? true : action

  useEffect(() => {
    if (windowSize[0] <= BreakPoints.laptop) {
      dispatchAction(false)
    } else {
      dispatchAction(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize[0]])

  return (
    <div>
      <Box className={styles.AppLayout}>
        <CssBaseline />
        <AppBar className={styles.AppBar} open={mobileOpen}>
          <Toolbar className={styles.ToolBar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => dispatchAction && dispatchAction(true)}
              sx={{
                mr: 2,
                ...(mobileOpen && { display: 'none' }),
              }}
            >
              <Menu />
            </IconButton>
            {mobileOpen && (
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={() => dispatchAction && dispatchAction(false)}
              >
                <Menu />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth, md: drawerWidth }, flexShrink: { sm: 0, md: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="persistent"
            anchor="left"
            open={mobileOpen}
          >
            <SideMenu />
          </Drawer>
        </Box>
        <Main
          onTouchStart={() => {
            if (windowSize[0] <= BreakPoints.laptop) dispatchAction(false)
          }}
          open={mobileOpen}
        >
          <Toolbar classes={{ root: styles.ToolbarRoot }} />
          {children}
        </Main>
      </Box>
    </div>
  )
}

import React from 'react'
import Header from 'layouts/Header'
import Helmet from 'layouts/Helmet'
import Footer from 'layouts/Footer'
import { Navigate, Outlet, useOutlet } from 'react-router-dom'
import { screenUrl } from 'libs/screen/screenUrl'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const elementWrapper = (Component: any) => {
  return <Component {...Component.PageProps} />
}

export const PrivateRoute = ({
  children,
  enabled,
}: {
  children: React.ReactElement
  enabled?: boolean
}) => {
  if (!enabled) return children
  const userInfo = localStorage.getItem('user-info')
  return userInfo ? children : <Navigate to={screenUrl.LOGIN} />
}

type Props = {
  title?: string
  isPrivateRoute?: boolean
  showHeader?: boolean
  showFooter?: boolean
}

const LayoutContainer: React.FC<Props> = ({
  title: _title = '',
  isPrivateRoute: _isPrivateRoute = false,
  showHeader: _showHeader = false,
  showFooter: _showFooter = false,
}) => {
  const ol = useOutlet()
  let props = ol?.props
  while (props?.children) {
    props = props.children.props
  }

  const {
    title = _title,
    isPrivateRoute = _isPrivateRoute,
    showHeader = _showHeader,
    showFooter = _showFooter,
  } = (props as Props) || {}

  return (
    <PrivateRoute enabled={isPrivateRoute}>
      <Helmet title={title}>
        {showHeader && <Header />}
        {props.contentProps}
        <Outlet />
        {showFooter && <Footer />}
      </Helmet>
    </PrivateRoute>
  )
}

export default LayoutContainer

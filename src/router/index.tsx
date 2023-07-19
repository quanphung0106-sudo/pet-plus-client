import HomePage from 'pages/home'
import LayoutContainer, { elementWrapper } from 'layouts/LayoutContainer'
import { screenUrl } from 'libs/screen/screenUrl'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutContainer />}>
          <Route path={screenUrl.HOME} element={elementWrapper(HomePage)} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter

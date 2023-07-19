import HomePage from '../pages/home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LayoutContainer, { elementWrapper } from 'src/layouts/LayoutContainer'
import { screenUrl } from 'src/libs/screen/screenUrl'

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

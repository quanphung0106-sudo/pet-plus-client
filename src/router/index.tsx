import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LayoutContainer, { elementWrapper } from 'src/layouts/LayoutContainer'
import { screenUrl } from 'src/libs/screen/screenUrl'
import HomePage from 'src/pages/home'
import LoginPage from 'src/pages/login'
import RegisterPage from 'src/pages/register'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutContainer />}>
          <Route path={screenUrl.HOME} element={elementWrapper(HomePage)} />
          <Route path={screenUrl.LOGIN} element={elementWrapper(LoginPage)} />
          <Route path={screenUrl.REGISTER} element={elementWrapper(RegisterPage)} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter

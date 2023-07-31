import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { PATH } from 'src/constants/Paths'
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
          <Route path={PATH.DASHBOARD} element={elementWrapper(HomePage)} />

          <Route path={PATH.YOUTUBE} element={elementWrapper(HomePage)} />
          <Route path={PATH.PACKAGES.YOUTUBE_CHANNEL_DETAIL} element={elementWrapper(HomePage)} />
          <Route path={PATH.PACKAGES.YOUTUBE_PLAYLIST_DELETED} element={elementWrapper(HomePage)} />
          <Route
            path={PATH.PACKAGES.YOUTUBE_PLAYLIST + '/:id'}
            element={elementWrapper(HomePage)}
          />

          <Route path={PATH.WAREHOUSE.CLIENT} element={elementWrapper(HomePage)} />
          <Route path={PATH.WAREHOUSE.CLIENT + '/:id'} element={elementWrapper(HomePage)} />

          <Route path={PATH.SERVER} element={elementWrapper(HomePage)} />
          <Route path={PATH.SERVER + '/detail/:server'} element={elementWrapper(HomePage)} />

          <Route path={PATH.PC} element={elementWrapper(HomePage)} />

          <Route path={PATH.WAREHOUSE.PROXY} element={elementWrapper(HomePage)} />
          <Route path={PATH.WAREHOUSE.ACCOUNT} element={elementWrapper(HomePage)} />
          <Route path={PATH.WAREHOUSE.VIDEO} element={elementWrapper(HomePage)} />
          <Route path={PATH.WAREHOUSE.CREDIT} element={elementWrapper(HomePage)} />
          <Route path={PATH.WAREHOUSE.SPOTIFY} element={elementWrapper(HomePage)} />

          <Route path={PATH.SETTING.CATEGORY} element={elementWrapper(HomePage)} />
          <Route path={PATH.SETTING.SUPPLIER} element={elementWrapper(HomePage)} />
          <Route path={PATH.SETTING.USER} element={elementWrapper(HomePage)} />
          <Route path={PATH.SETTING.SCENARIO} element={elementWrapper(HomePage)} />
          <Route path={PATH.SETTING.OCR} element={elementWrapper(HomePage)} />
          <Route path={PATH.SETTING.GROUP} element={elementWrapper(HomePage)} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter

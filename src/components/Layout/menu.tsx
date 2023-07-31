import { Dashboard, Dns, HouseSiding, Settings, VideoSettings, YouTube } from '@mui/icons-material'
import { ROLE } from 'src/constants/AppConstants'
import { PATH } from 'src/constants/Paths'

export const menus = [
  {
    icon: <Dashboard />,
    title: 'Dashboard',
    role: [ROLE.ADMIN, ROLE.EDITOR, ROLE.ONLY_VIEW],
    path: PATH.DASHBOARD,
  },
  {
    icon: <YouTube />,
    role: [ROLE.ADMIN, ROLE.EDITOR, ROLE.ONLY_VIEW],
    title: 'Youtube',
    path: PATH.YOUTUBE,
  },

  {
    icon: <VideoSettings />,
    role: [ROLE.ADMIN, ROLE.EDITOR, ROLE.ONLY_VIEW],
    title: 'Server',
    path: PATH.SERVER,
  },

  {
    icon: <Dns />,
    role: [ROLE.ADMIN, ROLE.EDITOR, ROLE.ONLY_VIEW],
    title: 'PC',
    path: PATH.PC,
  },
  {
    icon: <HouseSiding />,
    title: 'Warehouse',
    role: [ROLE.ADMIN, ROLE.EDITOR, ROLE.ONLY_VIEW],
    path: '',
    children: [
      { title: 'Video', path: PATH.WAREHOUSE.VIDEO },
      { title: 'Khách hàng', path: PATH.WAREHOUSE.CLIENT },
      { title: 'Proxy', path: PATH.WAREHOUSE.PROXY },
      { title: 'Account', path: PATH.WAREHOUSE.ACCOUNT },
      { title: 'Spotify', path: PATH.WAREHOUSE.SPOTIFY },
      { title: 'Credit', path: PATH.WAREHOUSE.CREDIT },
    ],
  },
  {
    icon: <Settings />,
    title: 'Settings',
    path: '',
    role: [ROLE.ADMIN],
    children: [
      { title: 'Category', path: PATH.SETTING.CATEGORY },
      { title: 'Supplier', path: PATH.SETTING.SUPPLIER },
      { title: 'Group', path: PATH.SETTING.GROUP },
      { title: 'User', path: PATH.SETTING.USER },
      { title: 'Scenario', path: PATH.SETTING.SCENARIO },
      { title: 'Ocr', path: PATH.SETTING.OCR },
    ],
  },
]

export const PATH = {
  DASHBOARD: '/',
  LOGIN: '/login',
  YOUTUBE: '/youtube',

  PACKAGES: {
    YOUTUBE: '/youtube',
    YOUTUBE_CHANNEL_DETAIL: '/youtube/channel/:id',
    YOUTUBE_CHANNEL_HISTORY: '/youtube/channel/history',
    YOUTUBE_PLAYLIST: '/youtube/playlist',
    YOUTUBE_PLAYLIST_DELETED: '/youtube/playlist/history',
    FACEBOOK: '/packages/facebook',
    SPOTIFY: '/packages/spotify',
    WEBSITE: '/packages/website',
  },

  SERVER: '/server',
  PC: '/pc',

  WAREHOUSE: {
    SPOTIFY: '/warehouse/spotify',
    CLIENT: '/warehouse/client',
    PROXY: '/warehouse/proxy',
    DEVICE: '/warehouse/device',
    ACCOUNT: '/warehouse/account',
    VIDEO: '/warehouse/video',
    VIDEO_DETAIL: '/warehouse/video/:id',
    CREDIT: '/warehouse/credit',
  },
  SETTING: {
    CATEGORY: '/settings/category',
    SUPPLIER: '/settings/supplier',
    GROUP: '/settings/group',
    USER: '/settings/user',
    SCENARIO: '/settings/scenario',
    OCR: '/settings/ocr',
  },
  ROLE: '/role',
  USER: '/user',
  NOTFOUND: '/not-found',
}

export const FORMAT_DATE = {
  DATE: 'DD/MM/YYYY',
  DATE_TIME: 'DD/MM/YYYY HH:mm',
  DATE_TIME_MS: 'DD/MM/YYYY HH:mm:ss',
}

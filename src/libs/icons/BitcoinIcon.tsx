import React from 'react'
import { SvgIcon, SvgIconProps, useTheme } from '@mui/material'

export const BitcoinIcon = (props: SvgIconProps) => {
  const theme = useTheme()

  return (
    <SvgIcon {...props} sx={{ width: '32px', height: '32px', fill: 'none' }} viewBox="0 0 32 32">
      <rect
        width="32"
        height="32"
        rx="4"
        fill={theme.palette.mode === 'dark' ? '#473E3B' : '#FFECE7'}
      />
      <path
        d="M16.0012 6C10.4863 6 6 10.4859 6 15.9988C6 21.5161 10.4859 26 16.0012 26C21.5165 26 26.0024 21.5161 26.0024 15.9988C26.0024 10.4859 21.5165 6 16.0012 6V6ZM16.0012 24.5069C11.3102 24.5069 7.49314 20.692 7.49314 15.9988C7.49314 11.3078 11.3103 7.49314 16.0012 7.49314C20.6942 7.49314 24.5069 11.3103 24.5069 15.9988C24.5069 20.6918 20.6942 24.5069 16.0012 24.5069Z"
        fill="#FF8F67"
      />
      <path
        d="M16.5011 15.2759C15.1453 14.7152 14.5688 14.3099 14.5688 13.5013C14.5688 12.8798 15.0215 12.1614 16.2194 12.1614C17.2171 12.1614 17.8544 12.5037 18.181 12.6906L18.5705 11.6638C18.1202 11.398 17.4805 11.1481 16.5482 11.1188L16.5484 9.60767H15.5799V11.1818C14.1476 11.4139 13.2312 12.3957 13.2312 13.6883C13.2312 15.0439 14.213 15.7601 15.8007 16.3817C16.9515 16.8501 17.5594 17.3772 17.5594 18.2352C17.5594 19.1224 16.8116 19.762 15.7059 19.762C14.8344 19.762 14.0237 19.4648 13.4629 19.091L13.0894 20.1335C13.6343 20.5253 14.5689 20.8046 15.4719 20.8227V22.3923H16.4537L16.4538 20.773C18.055 20.5096 18.913 19.3542 18.913 18.1269C18.9128 16.7397 18.1045 15.9313 16.5011 15.2759H16.5011Z"
        fill="#FF8F67"
      />
    </SvgIcon>
  )
}
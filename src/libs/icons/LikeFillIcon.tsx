import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const LikeFillIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      sx={{
        width: '24px',
        height: '24px',
      }}
      viewBox="0 0 24 24"
      fill="primary"
    >
      <path d="M13.12 2.05997L7.58 7.59997C7.21 7.96997 7 8.47997 7 9.00997V19C7 20.1 7.9 21 9 21H18C18.8 21 19.52 20.52 19.84 19.79L23.1 12.18C23.94 10.2 22.49 7.99997 20.34 7.99997H14.69L15.64 3.41997C15.74 2.91997 15.59 2.40997 15.23 2.04997C14.64 1.46997 13.7 1.46997 13.12 2.05997ZM3 21C4.1 21 5 20.1 5 19V11C5 9.89997 4.1 8.99997 3 8.99997C1.9 8.99997 1 9.89997 1 11V19C1 20.1 1.9 21 3 21Z" />
    </SvgIcon>
  )
}

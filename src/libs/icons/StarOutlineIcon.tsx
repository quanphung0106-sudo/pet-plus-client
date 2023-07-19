import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const StarOutlineIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      sx={{
        width: '24px',
        height: '24px',
        fill: 'none',
      }}
      viewBox="0 0 24 24"
    >
      <path
        d="M19.65 9.04L14.81 8.62L12.92 4.17C12.58 3.36 11.42 3.36 11.08 4.17L9.19001 8.63L4.36001 9.04C3.48001 9.11 3.12001 10.21 3.79001 10.79L7.46001 13.97L6.36001 18.69C6.16001 19.55 7.09001 20.23 7.85001 19.77L12 17.27L16.15 19.78C16.91 20.24 17.84 19.56 17.64 18.7L16.54 13.97L20.21 10.79C20.88 10.21 20.53 9.11 19.65 9.04ZM12 15.4L8.24001 17.67L9.24001 13.39L5.92001 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z"
        fill="#657ef8"
      />
    </SvgIcon>
  )
}

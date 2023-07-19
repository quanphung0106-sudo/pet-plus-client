import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

export const StarIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      sx={{
        width: '24px',
        height: '24px',
      }}
      viewBox="0 0 24 24"
    >
      <path d="M12 17.5198L16.15 20.0298C16.91 20.4898 17.84 19.8098 17.64 18.9498L16.54 14.2298L20.21 11.0498C20.88 10.4698 20.5199 9.36977 19.6399 9.29977L14.81 8.88977L12.92 4.42977C12.58 3.61977 11.42 3.61977 11.08 4.42977L9.18995 8.87977L4.35995 9.28977C3.47995 9.35977 3.11995 10.4598 3.78995 11.0398L7.45995 14.2198L6.35995 18.9398C6.15995 19.7998 7.08995 20.4798 7.84995 20.0198L12 17.5198Z" />
    </SvgIcon>
  )
}

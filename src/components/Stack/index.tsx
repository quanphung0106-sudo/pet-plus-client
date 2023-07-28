import React from 'react'
import { Stack as MUIStack, StackProps } from '@mui/material'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Stack = (props: StackProps & { component?: any; src?: any }) => {
  const { children, direction = 'row', component, src, ...rest } = props
  return (
    <MUIStack {...rest} component={component} src={src} direction={direction}>
      {children}
    </MUIStack>
  )
}

export default Stack

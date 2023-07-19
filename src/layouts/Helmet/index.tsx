import React from 'react'
import { Box } from '@mui/material'
import { ReactNode, useEffect } from 'react'

type HelmetProps = {
  title: string
  children: ReactNode
}

const Helmet = (props: HelmetProps): JSX.Element => {
  document.title = props.title + ' | UDA ONLINE LEARNING CLASSROOM'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Box>{props.children}</Box>
}

export default Helmet

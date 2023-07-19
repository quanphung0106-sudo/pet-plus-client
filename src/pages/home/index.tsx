import { Box, Button } from '@mui/material'
import React from 'react'
import { useNotificationStore } from 'store/notification-store'

function HomePage() {
  const { dispatchNotification } = useNotificationStore()
  const handleClick = () => {
    dispatchNotification('success', 'asdDSADSADASDASD')
  }
  return (
    <Box minHeight="50vh">
      <Button onClick={handleClick}>Click me</Button>
    </Box>
  )
}

HomePage.PageProps = {
  title: 'Trang chủ',
  showHeader: true,
  showFooter: true,
}

export default HomePage

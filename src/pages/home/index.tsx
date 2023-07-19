import { Box } from '@mui/material'
import { GhostButton, PrimaryButton, TextButton } from 'components/Button'
import React from 'react'
import { useNotificationStore } from 'store/notification-store'

function HomePage() {
  const { dispatchNotification } = useNotificationStore()
  const handleClick = () => {
    dispatchNotification('success', 'asdDSADSADASDASD')
  }
  return (
    <Box minHeight="50vh">
      <PrimaryButton onClick={handleClick}>Click me</PrimaryButton>
      <GhostButton onClick={handleClick}>Click me</GhostButton>
      <TextButton onClick={handleClick}>Click me</TextButton>
    </Box>
  )
}

HomePage.PageProps = {
  title: 'Trang chủ',
  showHeader: true,
  showFooter: true,
}

export default HomePage

import React from 'react'
import { Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { StackProps } from '@mui/material/Stack'
import { CalendarIcon, GroupIcon, HomeIcon, MicIcon, PodcastsIcon } from 'libs/icons'
import { useNavigate } from 'react-router-dom'

const ListIcon = (props: StackProps) => {
  const navigate = useNavigate()
  return (
    <Stack {...props}>
      <IconButton onClick={() => navigate('/')} color="lightGrey">
        <HomeIcon />
      </IconButton>
      <IconButton color="lightGrey">
        <CalendarIcon />
      </IconButton>
      <IconButton onClick={() => navigate('/forum')} color="lightGrey">
        <GroupIcon />
      </IconButton>
      <IconButton color="lightGrey">
        <PodcastsIcon />
      </IconButton>
      <IconButton color="lightGrey">
        <MicIcon />
      </IconButton>
    </Stack>
  )
}

export default ListIcon

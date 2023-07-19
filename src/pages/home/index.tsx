import { Box } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { GhostButton, PrimaryButton, TextButton } from 'src/components/Button'
import { BaseTextField, ContainerInputField, LineInputField, TextAreaField } from 'src/components/TextField'
import { useNotificationStore } from 'src/store/notification-store'
function HomePage() {
  const { dispatchNotification } = useNotificationStore()
  const handleClick = () => {
    dispatchNotification('success', 'asdDSADSADASDASD')
  }

  const { handleSubmit, control } = useForm<Record<string, unknown>>({
    defaultValues: {
      FirstName: '',
      LastName: '',
      Email: '',
    },
    mode: 'onChange',
  })
  const onSubmit = (data: Record<string, unknown>) => console.log(data)

  return (
    <Box minHeight="50vh">
      <PrimaryButton onClick={handleClick}>Click me</PrimaryButton>
      <GhostButton onClick={handleClick}>Click me</GhostButton>
      <TextButton onClick={handleClick}>Click me</TextButton>

      <form onSubmit={handleSubmit(onSubmit)}>
        <BaseTextField
          label="Label"
          copy
          control={control}
          name="FirstName"
          rules={{ required: true }}
        />
        <LineInputField
          label="Label"
          copy
          control={control}
          name="LastName"
          rules={{ required: true }}
        />
        <ContainerInputField
          label="Label"
          copy
          control={control}
          name="Email"
          type="email"
          rules={{ required: true }}
        />
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </form>

      <TextAreaField name="Test" label="Ahihi" copy />
    </Box>
  )
}

HomePage.PageProps = {
  title: 'Trang',
  showHeader: true,
  showFooter: true,
}

export default HomePage

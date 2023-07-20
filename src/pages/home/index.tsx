/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@mui/material'
import { GhostButton, PrimaryButton, TextButton } from 'src/components/Button'
import { BaseFormInputs, FormProvider, UseFormProvider } from 'src/components/FormProvider'
import { FormInputEnum } from 'src/components/FormProvider/constant'
import { useNotificationStore } from 'src/store/notification-store'
import styles from './style.module.scss'
import { useEffect, useRef } from 'react'

interface LoginInputs extends BaseFormInputs {
  username: string
  password: string
}

const inputs = [
  {
    name: 'username',
    type: FormInputEnum.INPUT,
    placeholder: 'Nhập tên đăng nhập',
    label: 'Tên đăng nhập',
    required: { value: true, message: 'Tên đăng nhập là bắt buộc' },
    className: styles.Input,
  },
  {
    name: 'password',
    type: FormInputEnum.PASSWORD,
    placeholder: 'Nhập mật khẩu',
    label: 'Mật khẩu',
    required: { value: true, message: 'Mật khẩu là bắt buộc' },
    className: styles.Input,
    isShowPassword: true,
  },
]

function HomePage() {
  const { dispatchNotification } = useNotificationStore()
  const formRef = useRef<UseFormProvider<LoginInputs>>(null)

  const handleClick = () => {
    dispatchNotification('success', 'asdDSADSADASDASD')
  }

  useEffect(() => {
    const keyDown = (e: any) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        onLoginClick()
      }
    }
    window.addEventListener('keydown', (e) => keyDown(e))
    return () => window.removeEventListener('keydown', (e) => keyDown(e))
  }, [])

  const onLoginClick = () => {
    console.log(formRef.current?.getValues())
  }

  return (
    <Box minHeight="50vh">
      <GhostButton onClick={handleClick}>Click me</GhostButton>
      <TextButton onClick={handleClick}>Click me</TextButton>

      <Box onSubmit={onLoginClick}>
        <FormProvider ref={formRef} inputs={inputs} mode="onSubmit" />
        <PrimaryButton onClick={onLoginClick} type="submit">
          Đăng nhập
        </PrimaryButton>
      </Box>
    </Box>
  )
}

HomePage.PageProps = {
  title: 'Trang',
  showHeader: true,
  showFooter: true,
}

export default HomePage

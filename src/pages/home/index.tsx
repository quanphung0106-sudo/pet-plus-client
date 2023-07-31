/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@mui/material'
import { useEffect, useRef } from 'react'
import { GhostButton, PrimaryButton, TextButton } from 'src/components/Button'
import { BaseFormInputs, FormProvider, UseFormProvider } from 'src/components/FormProvider'
import { FormInputEnum } from 'src/components/FormProvider/constant'
import { useNotificationStore } from 'src/store/notification-store'
import styles from './style.module.scss'
import { Layout } from 'src/components/Layout'
interface LoginInputs extends BaseFormInputs {
  username: string
  password: string
}

export type DataDropdown = {
  id: number
  userId: number
  title: string
  body: string
}

const inputs = [
  {
    name: 'username',
    type: FormInputEnum.INPUT,
    defaultValue: 'Helllo',
    placeholder: 'Nhập tên đăng nhập',
    label: 'Tên đăng nhập',
    required: { value: true, message: 'Tên đăng nhập là bắt buộc' },
    className: styles.Input,
    maxLength: { value: 12, message: 'Max là 12 length' },
  },
  {
    name: 'email',
    type: FormInputEnum.EMAIL,
    placeholder: 'Nhập email',
    label: 'Email',
    required: { value: true, message: 'Email là bắt buộc' },
    pattern: { value: /^\S+@\S+$/i, message: 'Phải là email' },
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
  {
    name: 'checkbox',
    type: FormInputEnum.CHECKBOX,
    label: 'Check me',
    defaultValue: 'hello',
    className: styles.Input,
    defaultChecked: false,
    required: { value: true, message: 'Check là bắt buộc' },
  },
  {
    name: 'file',
    type: FormInputEnum.FILE,
    label: 'Add a file (.csv)',
    className: styles.Input,
    required: { value: true, message: 'File là bắt buộc' },
    placeholder: 'Add a new file',
    fileConfigure: { maxSize: 50 * 1024 * 1024 },
  },
  // {
  //   name: 'select',
  //   label: 'List 1',
  //   type: FormInputEnum.SELECT,
  //   className: styles.Input,
  //   required: { value: true, message: 'Vui lòng chọn 1 option' },
  //   placeholder: 'Vui chọn chọn 1 option',
  //   dropdownURL: 'https://jsonplaceholder.typicode.com/posts?page=1',
  //   defaultValue: 1,
  // },
  // {
  //   name: 'select2',
  //   label: 'List 2',
  //   type: FormInputEnum.SELECT,
  //   className: styles.Input,
  //   required: { value: true, message: 'Vui lòng chọn 1 option asdsadadda' },
  //   placeholder: 'Vui chọn chọn 1 option',
  //   dropdownURL: 'https://jsonplaceholder.typicode.com/posts?page=2',
  //   defaultValue: 2,
  // },
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

  const onSubmit = (data: any) => {
    console.log(data, 'Successfully!!!')
  }

  const onLoginClick = () => {
    formRef.current?.handleSubmit(onSubmit)()
  }

  return (
    <Layout>
      <GhostButton onClick={handleClick}>Click me</GhostButton>
      <TextButton onClick={handleClick}>Click me</TextButton>
      <Box onSubmit={onLoginClick}>
        <FormProvider ref={formRef} inputs={inputs} mode="all" />
        <PrimaryButton onClick={onLoginClick} type="submit">
          Đăng nhập
        </PrimaryButton>
        B
      </Box>
    </Layout>
  )
}

HomePage.PageProps = {
  title: 'Trang',
  showHeader: false,
  showFooter: true,
}

export default HomePage

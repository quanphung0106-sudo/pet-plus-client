import { Box, Button, Divider, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useRef } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { PrimaryButton } from 'src/components/Button'
import { BaseFormInputs, FormProvider } from 'src/components/FormProvider'
import { FormInputEnum } from 'src/components/FormProvider/constant'
import Stack from 'src/components/Stack'
import { LoginImage } from 'src/libs/assets/images'
import styles from './style.module.scss'

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
  },
]

function LoginPage() {
  const theme = useTheme()
  const downSm = useMediaQuery(theme.breakpoints.down('sm'))
  const formRef = useRef<UseFormReturn<LoginInputs>>(null)

  const onSubmitForm = (data: any) => {
    console.log(data)
  }

  const onLoginClick = () => {
    formRef.current?.handleSubmit(onSubmitForm)()
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

  return (
    <Stack
      height="100vh"
      alignItems="center"
      justifyContent="center"
      sx={{ background: '#e6e8ec' }}
    >
      <Stack
        direction="row"
        width={{ xs: '100%', sm: '90%', lg: '1000px' }}
        height={{ xs: '100%', sm: '620px', lg: '620px' }}
        sx={{
          background:
            theme.palette.mode === 'dark' ? theme.palette.white.main : theme.palette.white.main,
          borderRadius: downSm ? 0 : '25px',
        }}
      >
        {!downSm && (
          <Stack
            flexDirection="column"
            minWidth={{ xs: '100%', sm: '50%', xl: '50%' }}
            maxWidth={{ xs: '100%', sm: '50%', xl: '50%' }}
            padding={{ xs: '30px', sm: '30px', lg: '50px' }}
            height="100%"
            gap="35px"
            justifyContent="center"
          >
            <Stack flexDirection="column">
              <Typography variant="h1">Đăng nhập</Typography>
              <Typography>Vui lòng nhập đầy đủ thông tin của bạn.</Typography>
              {downSm && (
                <>
                  <Button variant="contained" sx={{ m: '35px 0' }}>
                    Đăng nhập bằng nhận diện khuôn mặt
                  </Button>
                  <Divider sx={{ '&:before, &:after': { top: 0 } }}>or</Divider>
                </>
              )}
            </Stack>
            <Box onSubmit={onLoginClick}>
              <FormProvider inputs={inputs} mode="all" ref={formRef} />
              <Typography
                sx={{
                  '&': {
                    textAlign: 'end',
                    mt: '5px',
                    mb: '10px',
                    '& a': {
                      color: theme.palette.black.dark,
                      fontWeight: 600,
                      textDecoration: 'underline',
                    },
                  },
                }}
              >
                <NavLink to="/login">Quên mật khẩu</NavLink>
              </Typography>
              <PrimaryButton type="submit" onClick={onLoginClick} fullWidth>
                Đăng nhập
              </PrimaryButton>
            </Box>
            <Stack gap="10px">
              <Typography
                textAlign="center"
                sx={{
                  '& a': {
                    color: theme.palette.black.dark,
                    fontWeight: 600,
                  },
                }}
              >
                Chưa có tài khoản? <NavLink to="/register">Đăng ký</NavLink>
              </Typography>
            </Stack>
          </Stack>
        )}
        <Stack width={{ xs: '100%', sm: '50%', lg: '100%' }} height="100%">
          <Stack
            width="100%"
            height="100%"
            component="img"
            src={LoginImage}
            sx={{
              objectFit: 'cover',
              borderTopRightRadius: '25px',
              borderBottomRightRadius: '25px',
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default LoginPage

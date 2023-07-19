import { Close } from '@mui/icons-material'
import { AlertProps, AlertTitle, IconButton, Stack, Typography } from '@mui/material'
import clsx from 'clsx'
import { useSnackbar } from 'notistack'
import React, { useEffect } from 'react'
import { useNotificationStore } from '../../store/notification-store'
import styles from './style.module.scss'

interface CustomAlertProps {
  label: React.ReactNode
  value?: string
}

const AlertBase = (props: AlertProps & { value?: string }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const { children, className, value, ...rest } = props

  useEffect(() => {
    enqueueSnackbar(<>{children}</>, {
      key: value,
      variant: rest.severity,
      className: className,
      action: (
        <IconButton
          classes={{ root: styles.AlertIconButton }}
          size="small"
          onClick={() => closeSnackbar(value)}
        >
          <Close />
        </IconButton>
      ),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props])

  return <></>
}

export const SuccessNotification = (props: AlertProps & CustomAlertProps) => {
  const { children, label, className, ...rest } = props
  return (
    <AlertBase
      {...rest}
      className={clsx(styles.AlertBase, styles.AlertSuccessRoot, className)}
      severity="success"
    >
      <Stack className={styles.AlertContent}>
        <AlertTitle classes={{ root: styles.AlertContentLabel }}>{label}</AlertTitle>
        <Typography component="div" classes={{ root: styles.TypographyRoot }}>
          {children}
        </Typography>
      </Stack>
    </AlertBase>
  )
}

export const InfoNotification = (props: AlertProps & CustomAlertProps) => {
  const { children, label, className, ...rest } = props
  return (
    <AlertBase
      {...rest}
      className={clsx(styles.AlertBase, styles.AlertInfoRoot, className)}
      severity="info"
    >
      <Stack className={styles.AlertContent}>
        <AlertTitle classes={{ root: styles.AlertContentLabel }}>{label}</AlertTitle>
        <Typography component="div" classes={{ root: styles.TypographyRoot }}>
          {children}
        </Typography>
      </Stack>
    </AlertBase>
  )
}

export const WarningNotification = (props: AlertProps & CustomAlertProps) => {
  const { children, label, className, ...rest } = props
  return (
    <AlertBase
      {...rest}
      className={clsx(styles.AlertBase, styles.AlertWarningRoot, className)}
      severity="warning"
    >
      <Stack className={styles.AlertContent}>
        <AlertTitle classes={{ root: styles.AlertContentLabel }}>{label}</AlertTitle>
        <Typography component="div" classes={{ root: styles.TypographyRoot }}>
          {children}
        </Typography>
      </Stack>
    </AlertBase>
  )
}
export const ErrorNotification = (props: AlertProps & CustomAlertProps) => {
  const { children, label, className, ...rest } = props
  return (
    <AlertBase
      {...rest}
      className={clsx(styles.AlertBase, styles.AlertErrorRoot, className)}
      severity="error"
    >
      <Stack className={styles.AlertContent}>
        <AlertTitle classes={{ root: styles.AlertContentLabel }}>{label}</AlertTitle>
        <Typography component="div" classes={{ root: styles.TypographyRoot }}>
          {children}
        </Typography>
      </Stack>
    </AlertBase>
  )
}

export enum NotificationType {
  INFO = 'info',
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success',
}

export const NotificationProvider = () => {
  let message
  const notification = useNotificationStore((store) => store.notification)
  if (notification) {
    const { description, label, type, key } = notification
    switch (type) {
      case NotificationType.SUCCESS:
        return (
          <SuccessNotification label={label} value={key}>
            {description}
          </SuccessNotification>
        )
      case NotificationType.INFO:
        return (
          <InfoNotification label={label} value={key}>
            {description}
          </InfoNotification>
        )
      case NotificationType.WARNING:
        return (
          <WarningNotification label={label} value={key}>
            {description}
          </WarningNotification>
        )
      case NotificationType.ERROR:
        message = label ?? 'There is something wrong. Please try again later!'
        return (
          <ErrorNotification label={message} value={key}>
            {description}
          </ErrorNotification>
        )
      default:
        return <></>
    }
  }
  return <></>
}

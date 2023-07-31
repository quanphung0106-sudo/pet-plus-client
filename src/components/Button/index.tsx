/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { CSSProperties } from 'react'
import { LoadingButton } from '@mui/lab'
import { ButtonProps, IconButton, IconButtonProps } from '@mui/material'
import clsx from 'clsx'
import styles from './style.module.scss'
import { ContentCopy, Refresh } from '@mui/icons-material'
import { useNotificationStore } from 'src/store/notification-store'

type CopyTextProps = IconButtonProps & {
  text: string
  IconStyle?: CSSProperties
  showAlert?: boolean
}

export const PrimaryButton = (props: ButtonProps) => {
  return (
    <LoadingButton
      {...props}
      variant="contained"
      className={clsx(styles.BaseButton, styles.PrimaryButton, props.className)}
    />
  )
}

export const TextButton = (props: ButtonProps) => {
  return (
    <LoadingButton
      {...props}
      variant="outlined"
      className={clsx(styles.BaseButton, styles.TextButton, props.className)}
    />
  )
}

export const GhostButton = (props: ButtonProps) => {
  return (
    <LoadingButton
      {...props}
      variant="text"
      className={clsx(styles.BaseButton, styles.GhostButton, props.className)}
    />
  )
}

export const CopyTextIcon = (props: CopyTextProps) => {
  const { text, IconStyle } = props
  const { dispatchNotification } = useNotificationStore()

  return (
    <IconButton
      onClick={async () => {
        await navigator.clipboard.writeText(text)
        dispatchNotification('success', 'Copied')
      }}
    >
      <ContentCopy style={{ fontSize: '1.4rem', ...IconStyle }} />
    </IconButton>
  )
}

// export const RefreshButton = (props: { id: string; changeQuery?: boolean }) => {
//   const onQuery = useListViewStore((store) => store.onQuery)

//   return (
//     <IconButton
//       onClick={() => {
//         onQuery(props.id, {}, true, props.changeQuery)
//       }}
//       className={styles.btnRefresh}>
//       <Refresh fontSize={'small'} />
//     </IconButton>
//   )
// }

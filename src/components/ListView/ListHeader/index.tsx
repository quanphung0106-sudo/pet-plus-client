import React from 'react'
import { ListHeaderProps } from '..'
import { Grid, Typography } from '@mui/material'
import styles from '../style.module.scss'
import clsx from 'clsx'

const ListHeader = (props: ListHeaderProps) => {
  const { className, title } = props
  return (
    <>
      <Grid container className={clsx(styles.ListHeader, className)}>
        <Grid item className={styles.Title}>
          <Typography className={styles.Subhead1}>{title}</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default ListHeader

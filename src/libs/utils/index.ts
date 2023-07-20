import { Theme } from '@mui/material'
import moment from 'moment'
import { ACTIVATE_STATUS } from '../enums'

export const formatDate = (date: string) => {
  return moment(date).format('L')
}

export const formatPriceToVND = (price: number) => {
  return (
    price.toLocaleString('en-US', {
      style: 'decimal',
      useGrouping: true,
    }) + ' VND'
  )
}

export const capitalizeFirstLetter = (text: string) => {
  return text?.charAt(0).toUpperCase() + text?.slice(1)
}

export const handleStatus = (status: number, theme: Theme) => {
  if (status === ACTIVATE_STATUS.ONLINE) return theme.palette.green.main
  if (status === ACTIVATE_STATUS.OFFLINE) return theme.palette.lightGrey.main
  if (status === ACTIVATE_STATUS.AWAY) return theme.palette.yellow.main
  return theme.palette.red.main
}

export const isNullOrUndefined = (value?: unknown): boolean => {
  return value !== null || value !== undefined
}

export const isObjectEmpty = (object: Record<string, unknown> = {}): boolean => {
  return typeof object === 'object' && (isNullOrUndefined(object) || Object.keys(object).length === 0)
}
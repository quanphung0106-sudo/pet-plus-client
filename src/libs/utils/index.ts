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
  return (
    typeof object === 'object' && (isNullOrUndefined(object) || Object.keys(object).length === 0)
  )
}

export const formatBytes = (bytes: number, decimals: number = 2) => {
  if (!+bytes) return '0 B'

  const kb = 1024
  const decimal = decimals < 0 ? 0 : decimals
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  //Chia logarit tự nhiên cơ số kb của bytes(=52428800) => 2.564385618977472.
  //Bởi vì lấy giá trị kb(=1024) mũ i(=2.564385618977472) thì sẽ ra chính kết quả của bytes
  //Sử dụng Math.floor để làm tròn một số xuống dưới => = 2
  // Muốn chuyển byte về MB sẽ phải chia 2 lần cho 1024. Vậy công thức dưới tính ra + Math.floor => = Số lần phải chia là 2
  const i = Math.floor(Math.log(bytes) / Math.log(kb))
  return `${parseFloat((bytes / Math.pow(kb, i)).toFixed(decimal))} ${sizes[i]}`
}

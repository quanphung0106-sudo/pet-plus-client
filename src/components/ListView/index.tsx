import React, { ReactNode } from 'react'

export type Data =
  | { page: number; totalRecords: number; data: unknown[]; size?: number }
  | Record<string, any>

export interface Type<T = any> extends Function {
  new (...args: any[]): T
}

export type DataDropdownSort = {
  sortKey: string
  sortOrder: string
  label: string
}

export type DataDropdownFilter = {
  key: string
  value: any
  label: string
}

export type ListHeaderProps = {
  id?: string
  title?: string
  subheader?: React.ReactNode
  search?: boolean
  labelDropdown?: string
  dropdown?: Array<DataDropdownSort> | Array<DataDropdownFilter>
  extraHeader?: React.ReactNode
  isRefresh?: boolean
  isSearch?: boolean
  isPaginationHeader?: boolean
  tab?: {
    tabs: { label: string; component: JSX.Element }[]
    className?: string
    search?: boolean
    dropdown?: Array<DataDropdownSort> | Array<DataDropdownFilter>
  }
  className?: string
  changeQuery?: boolean
}

type Props<T> = {
  model?: Type<T>
  id: string
  modeDefault?: 'list' | 'card'
  baseURL?: string
  timeReload?: number
  cardTemplate?: (args: Record<string, unknown>, values?: Record<string, unknown>) => ReactNode
  listViewClasses?: { listHeader?: string; cardView?: string }
  dataSample?: Data
  pagination?: boolean
  changeQuery?: boolean
  selectOptions?: {
    role: string[]
    selectRow: boolean
    edit?: React.ReactNode
    delete?: React.ReactNode
    render?: React.ReactNode
  }
  rowsPerPageOptions?: number[]
  withOtherAPI?: boolean
  withIndex?: boolean
}

const ListView = <T extends object>(props: Props<T> & ListHeaderProps) => {
  //   const { title } = props
  return <div>ListView</div>
}

export default ListView

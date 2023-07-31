/* eslint-disable @typescript-eslint/no-unused-vars */
// import { queryString } from 'query-string'
import { GetState, SetState, create } from 'zustand'

export type Data = { page: number; totalRecords: number; data: unknown[]; size?: number } | Record<string, any>
export type ColumnSort = Map<string, 'asc' | 'desc' | string>

interface ListView {
    url?: string
    isFetching?: boolean
    columnSort?: ColumnSort
    data?: Data
    selectData?: Map<string, unknown>
    mode?: 'card' | 'list'
}

interface IListViewStore {
    listViewMap?: Map<string, ListView>
    onDelete: (id: string, key: string, updateQuery?: boolean) => void
    onEdit: (id: string, key: string, updateQuery?: boolean) => void
    onLoading: (id: string, updateQuery?: boolean) => void
    onChangeMode: (id: string, mode: 'card' | 'list', updateQuery?: boolean) => void
    onData: (id: string, data: Data, url?: string, updateQuery?: boolean) => void
    onQuery: (id: string, queryString: {}, isRefresh?: boolean, updateQuery?: boolean, isFetching?: boolean) => void
    onSelect: (id: string, selectData?: Map<string, unknown>) => void
}

export const useListViewStore = (() => {
    return {
        // async onQuery(id, queryString, isRefresh, updateQuery = true, isFetching = true) {
        //     // const listViewMap = onLoading
        // }
    }
})


// const onLoading = (
//     id: string,
//     get: GetState<IListViewStore>,
//     set: SetState<IListViewStore>,
//     isRefresh?: boolean,
//     isFetching?: boolean
// ) => {
//     const listViewMap = getListViewMap
// }

// const getListViewMap = (get: GetState<IListViewStore>) => {
//     let listViewMap = get().listViewMap
//     if (!listViewMap) listViewMap
// }
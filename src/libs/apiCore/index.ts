import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import queryString from 'query-string'
import { DispatchNotification } from 'src/store/notification-store'

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type RequestProps = {
  baseURL: string
  params?: unknown
  showNotification?: boolean
  method?: HttpMethod
  onSuccess: (data: any) => void
  onNotification?: DispatchNotification
  onHandleError?: (error?: any) => void
  config?: AxiosRequestConfig
}

export const apiCore = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
}

export const handleError = (error: AxiosError, dispatchNotification?: DispatchNotification) => {
  const statusError = error.response?.status
  if (statusError === 401) {
    window.location.replace('/login')
  } else if (statusError === 403) {
    window.location.replace('/not-found')
  } else {
    dispatchNotification && dispatchNotification('error', 'Không thể tải trang')
  }
}

export const onUpdateQuery = (url = '', query = {}) => {
  const currentQuery = queryString.parse(window.location.search)
  return url + '?' + queryString.stringify(Object.assign(currentQuery, query))
}

export const invokeRequest = async (options: RequestProps) => {
  const {
    baseURL,
    params,
    method = HttpMethod.GET,
    onSuccess,
    onNotification,
    onHandleError,
    config,
  } = options

  try {
    let response: AxiosResponse
    if (method === HttpMethod.DELETE) response = await apiCore.delete(baseURL, { data: params })
    else if (method === HttpMethod.PATCH) response = await apiCore.patch(baseURL, params)
    else if (method === HttpMethod.POST) response = await apiCore.post(baseURL, params, config)
    else response = await apiCore.get(baseURL, { params })

    onSuccess(response.data)
  } catch (error) {
    handleError(error as AxiosError, onNotification)
    const statusError = (error as AxiosError)?.response?.data
    onHandleError && onHandleError(statusError)
  }
}

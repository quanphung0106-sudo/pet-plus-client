import { useEffect, useState } from 'react'
import { RequestProps, invokeRequest } from 'src/libs/apiCore'
import { useNotificationStore } from 'src/store/notification-store'
import { useDebouncedCallback } from 'use-debounce'

export const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight])

  const updateSize = useDebouncedCallback(() => {
    setSize([window.innerWidth, window.innerHeight])
  }, 500)

  useEffect(() => {
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return size
}

export const useAPI = (
  options: RequestProps & { onShowLoading?: () => void } & {
    timeReload?: number
    clearRequest?: boolean
  },
) => {
  const {
    onShowLoading,
    timeReload,
    clearRequest = false,
    showNotification = true,
    ...rest
  } = options
  const { dispatchNotification } = useNotificationStore()

  let intervalId: NodeJS.Timer
  useEffect(() => {
    if (clearRequest) return
    if (rest.baseURL) {
      onShowLoading && onShowLoading()
      invokeRequest({
        onNotification: showNotification ? dispatchNotification : undefined,
        ...rest,
        //handle error right here
        // onHandleError: (error) => {
        //     clearTimeout(intervalId)
        // },
      })
      if (timeReload) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        intervalId = setInterval(() => {
          invokeRequest({ ...rest, onNotification: dispatchNotification })
        }, timeReload)
      }
    }
    return () => clearInterval(intervalId)
  }, [rest.baseURL, timeReload, clearRequest])
}

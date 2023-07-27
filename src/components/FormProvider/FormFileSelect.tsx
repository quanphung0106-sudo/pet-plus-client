/* eslint-disable @typescript-eslint/no-unused-vars */
import { Folder } from '@mui/icons-material'
import { Typography } from '@mui/material'
import clsx from 'clsx'
import { useRef, useState } from 'react'
import { Controller, FieldValues } from 'react-hook-form'
import { formatBytes } from 'src/libs/utils'
import { Props } from './FormControl'
import styles from './style.module.scss'

export const FormFileSelect = <T extends FieldValues>(props: Props<T>) => {
  const { control, form } = props
  const [file, setFile] = useState<any>(null)
  const error = form.formState.errors[control.name]
  const allowedExtensions = control.fileConfigure?.allowedExtensions || ['.CSV']
  const fileRef = useRef<any>(null)
  const maxSize = control.fileConfigure?.maxSize || 5 * 1024 * 1024 // default 5120kb

  const handleFileChange = (e: any) => {
    if (e.target.files.length) {
      const file = e.target.files[0]
      const fileExtention: string = file?.type.split('/')[file?.name?.split('.')?.length - 1]
      const fileType = fileExtention || file?.name.split('.')[1]
      if (!allowedExtensions.includes('.' + fileType.toLocaleUpperCase())) {
        form.setError(control.name, { type: 'deps', message: 'file không hợp lệ' })
        // fileRef.current = null
        setFile(null)
        return
      }

      if (file.size > maxSize) {
        form.setError(control.name, {
          type: 'deps',
          message: `Kích thước tối đa ${formatBytes(maxSize, 2)}`,
        })
        // fileRef.current = null
        setFile(null)
        return
      }

      setFile(file)
      form.setValue(control.name, file)
      form.clearErrors(control.name)
    }
  }

  const onResetFile = () => {
    // if (fileRef.current) fileRef.current = null
  }

  return (
    <Controller
      name={control.name}
      control={form.control}
      rules={{
        required: control.required,
      }}
      render={() => {
        return (
          <div className={styles.RootFileSelect}>
            <Typography
              className={clsx(
                styles.CaptionTop,
                error ? styles.CaptionError : styles.CaptionDefault,
              )}
            >
              {control?.label}
            </Typography>
            <div className={styles.FileSelect}>
              <input
                ref={fileRef}
                className={styles.Input}
                onChange={handleFileChange}
                onClick={onResetFile}
                id="fileInput"
                name={control.name}
                accept={allowedExtensions.join(', ')}
                type="File"
              />
              <label className={clsx(styles.Box, error && styles.BoxError)} htmlFor="fileInput">
                <Typography noWrap className={styles.Label}>
                  {(file && file?.name) ||
                    `${control?.placeholder} (${allowedExtensions.join(', ').toLocaleLowerCase()})`}
                </Typography>
                <div className={styles.FolderIcon}>
                  <Folder />
                </div>
              </label>
            </div>
            {error && (
              <Typography className={styles.CaptionBottom}>{error.message?.toString()}</Typography>
            )}
          </div>
        )
      }}
    />
  )
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { Controller, FieldValues } from 'react-hook-form'
import { Props } from './FormControl'
import styles from './style.module.scss'
import { Typography } from '@mui/material'
import clsx from 'clsx'
import { Folder } from '@mui/icons-material'

export const FormFileSelect = <T extends FieldValues>(props: Props<T>) => {
  const { control, form } = props
  const [file, setFile] = useState<any>(null)
  const error = form.formState.errors[control.name]
  const allowedExtensions = control.fileConfigure?.allowedExtensions || ['.CSV']
  const maxSize = control.fileConfigure?.maxSize || 5 * 1024 * 1024 // default 5120kb

  const handleFileChange = (e: any) => {
    if (e.target.files.length) {
      const file = e.target.files[0]
      const fileExtention: string = file?.type.split('/')[file?.name?.split('.')?.length - 1]
      const fileType = file?.name.split('.')[1]
      if (!allowedExtensions.includes('.' + fileType.toLocaleUpperCase())) {
        form.setError(control.name, { type: 'deps', message: 'file không hợp lệ' })
        setFile(null)
        return
      }
    }
  }

  return (
    <Controller
      name={control.name}
      control={form.control}
      rules={{
        required: control.required,
      }}
      render={() => (
        <div className={styles.RootFileSelect}>
          <Typography
            className={clsx(styles.CaptionTop, error ? styles.CaptionError : styles.CaptionDefault)}
          >
            {control?.label}
          </Typography>
          <div className={styles.FileSelect}>
            <input
              //   ref={inputRef}
              className={styles.Input}
              onChange={handleFileChange}
              //   onClick={onResetFile}
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
      )}
    />
  )
}

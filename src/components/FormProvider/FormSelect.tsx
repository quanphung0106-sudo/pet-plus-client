/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, FieldValues } from 'react-hook-form'
import { Props } from './FormControl'
import { Autocomplete } from '@mui/material'
import { ContainerInputField } from '../TextField'
import clsx from 'clsx'
import styles from './style.module.scss'
import { KeyboardArrowDownRounded } from '@mui/icons-material'
import { ReactNode, useEffect, useState } from 'react'
import { DataDropdown } from 'src/pages/home'
import { useAPI } from 'src/hook'

export const FormSelect = <T extends FieldValues>(props: Props<T>) => {
  const { control, form } = props
  const [data, setData] = useState<DataDropdown[]>(Array.isArray(control.data) ? control.data : [])
  const [value, setValue] = useState<any>(data.find((d) => d.userId === control.defaultValue))
  const error = form.formState.errors[control.name]

  const handleValueChange = (newValue: any, onChange: (...event: any[]) => void) => {
    onChange(newValue?.body || null)
    setValue(newValue)
  }

  if (control?.dropdownURL) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useAPI({
      baseURL: control.dropdownURL,
      onSuccess: (data) => {
        setData(data)
        setValue(data.find((d: any) => d.userId === control.defaultValue))
      },
    })
  }

  useEffect(() => {
    setValue(data.find((d) => d.userId === control.defaultValue))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [control.defaultValue])

  return (
    <Controller
      name={control.name}
      control={form.control}
      rules={{ required: control.required }}
      defaultValue={control.defaultValue}
      render={({ field: { onChange } }) => {
        return (
          <Autocomplete
            options={data}
            disabled={control.disabled}
            key={control.name}
            getOptionLabel={(option) => option?.body}
            onChange={(_, newValue) => handleValueChange(newValue, onChange)}
            className={clsx(styles.Autocomplete, control.className)}
            classes={{ input: styles.Input, listbox: styles.ListBoxDropdown }}
            popupIcon={<KeyboardArrowDownRounded />}
            noOptionsText="Not found!"
            placeholder={control.placeholder}
            value={value || null}
            isOptionEqualToValue={(option, value) => option.body === value.body}
            renderInput={(params) => {
              return (
                <ContainerInputField
                  {...params}
                  value={value?.body}
                  error={Boolean(error)}
                  helperText={error?.message as ReactNode}
                  placeholder={control.placeholder}
                  isLabelInline={control.isLabelInline}
                  label={control.label}
                />
              )
            }}
            renderOption={(props, options) => {
              return (
                <li {...props}>
                  <div className={styles.ListItem}>{options.body}</div>
                </li>
              )
            }}
          />
        )
      }}
    />
  )
}

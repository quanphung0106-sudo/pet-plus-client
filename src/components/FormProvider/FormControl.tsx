import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment } from '@mui/material'
import clsx from 'clsx'
import { ReactNode, useState } from 'react'
import { Controller, FieldValues, UseFormReturn } from 'react-hook-form'
import { Control } from '.'
import { ContainerInputField } from '../TextField'
import { FormInputEnum } from './constant'
export interface Props<T extends FieldValues> {
  control: Control<T>
  form: UseFormReturn<T>
}

export const FormTextField = <T extends FieldValues>(props: Props<T>) => {
  const { control, form } = props
  const [isShow, setIsShow] = useState(false)
  const error = form.formState.errors[control.name]

  const renderPasswordIcon = (isShowPassword: boolean, type: string) => {
    if (isShowPassword && type === FormInputEnum.PASSWORD) {
      return {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setIsShow(!isShow)}>
              {isShow ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }
    }
  }

  return (
    <Controller
      defaultValue={control.defaultValue ?? ''}
      rules={{
        maxLength: control.maxLength,
        minLength: control.minLength,
        required: control.required,
        pattern: control.pattern,
        min: control.min,
        max: control.max,
      }}
      control={form.control}
      name={control.name}
      render={({ field }) => {
        return (
          <ContainerInputField
            inputRef={field.ref}
            disabled={control.disabled}
            value={field.value}
            isLabelInline={control.isLabelInline}
            label={control.label}
            copy={control?.copy}
            id={control.name}
            onChange={field.onChange}
            onBlur={(event: any) => {
              event.target.value && form.setValue(field.name, event.target.value.trim() as any)
              field.onBlur()
            }}
            type={isShow ? FormInputEnum.INPUT : control.type}
            helperText={error?.message as ReactNode}
            error={Boolean(error)}
            className={clsx(control.className)}
            placeholder={control.placeholder}
            InputProps={renderPasswordIcon(!!control.isShowPassword, control.type)}
            inputProps={{
              min: control.min?.value,
              max: control.max?.value,
              autoComplete: 'new-password',
            }}
          />
        )
      }}
    />
  )
}

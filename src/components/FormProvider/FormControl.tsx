import { Controller } from 'react-hook-form'

import { FieldValues, UseFormReturn } from 'react-hook-form'
import { Control } from '.'
import { ContainerInputField } from '../TextField'
import { useState } from 'react'
import { FormInputEnum } from './constant'
import { IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

interface Props<T extends FieldValues> {
  control: Control<T>
  form: UseFormReturn<T>
}

export const FormTextField = <T extends FieldValues>(props: Props<T>) => {
  const { control, form } = props
  const [isShow, setIsShow] = useState(false)

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

  console.log(form.formState.errors)
  return (
    <Controller
      defaultValue={control.defaultValue}
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
            disabled={control.disabled}
            label={control.label}
            className={control.className}
            placeholder={control.placeholder}
            error={true}
            helperText={'Hello'}
            ref={field.ref}
            value={field.value}
            onChange={field.onChange}
            id={field.name}
            copy={control.copy}
            onBlur={({ target }: { target: { value: string } }) => {
              target.value && form.setValue(field.name, target.value.trim() as any)
              field.onBlur()
            }}
            isLabelInline={control.isLabelInline}
            type={isShow ? FormInputEnum.INPUT : control.type}
            InputProps={renderPasswordIcon(!!control.isShowPassword, control.type)}
            inputProps={{
              min: control?.min?.value,
              max: control?.max?.value,
              autoComplete: 'new-password',
            }}
          />
        )
      }}
    />
  )
}

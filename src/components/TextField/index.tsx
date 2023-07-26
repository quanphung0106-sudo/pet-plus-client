/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import {
  FormHelperTextProps,
  InputLabelProps,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material'
import styles from './style.module.scss'
import clsx from 'clsx'
import Stack from '../Stack'
import { CopyTextIcon } from '../Button'

type BaseInputProps = TextFieldProps &
  InputLabelProps &
  FormHelperTextProps & {
    isLabelInline?: boolean
    copy?: boolean
  }

const InputBaseClasses = {
  root: styles.InputBaseRoot,
  focused: styles.InputBaseFocused,
  error: styles.InputBaseError,
  disabled: styles.InputBaseDisabled,
}

const InputLabelClasses = {
  root: clsx(styles.LabelRoot, styles.Caption),
  focused: styles.LabelFocused,
  error: styles.LabelError,
  disabled: styles.LabelDisabled,
}

const FormHelperTextClasses = {
  root: styles.HelperTextRoot,
  error: styles.HelperTextError,
}

export const BaseTextField = (props: BaseInputProps) => {
  const {
    isLabelInline,
    className,
    label,
    copy,
    placeholder,
    InputLabelProps,
    FormHelperTextProps,
    ...rest
  } = props

  return (
    <Stack>
      {isLabelInline && <Typography className={styles.LabelText}>{label}</Typography>}
      <TextField
        sx={{
          margin: '30px',
        }}
        {...rest}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
          }
        }}
        label={
          copy ? (
            <Stack className={styles.LabelCopyTextWrap}>
              {!isLabelInline && label}
              <CopyTextIcon text={(rest.value as string) || ''} />
            </Stack>
          ) : (
            !isLabelInline && label
          )
        }
        placeholder={props.name || placeholder}
        className={clsx(styles.InputField, className)}
        InputLabelProps={{
          shrink: true,
          classes: InputLabelClasses,
          ...InputLabelProps,
        }}
        FormHelperTextProps={{
          classes: FormHelperTextClasses,
          ...FormHelperTextProps,
        }}
      />
    </Stack>
  )
}

export const LineInputField = (props: BaseInputProps) => {
  return (
    <BaseTextField
      {...props}
      variant="standard"
      className={clsx(styles.LineInputField, props.className)}
      InputProps={{
        classes: {
          ...InputBaseClasses,
        },
        ...props.InputProps,
      }}
    />
  )
}

export const ContainerInputField = (props: BaseInputProps) => {
  return (
    <BaseTextField
      {...props}
      variant="outlined"
      className={clsx(styles.ContainerInputField, props.className)}
      InputProps={{
        classes: {
          ...InputBaseClasses,
          notchedOutline: styles.NotchedOutline,
        },
        ...props.InputProps,
      }}
    />
  )
}

const BaseTextAreaField = (props: BaseInputProps) => {
  const {
    InputLabelProps,
    FormHelperTextProps,
    className,
    variant,
    label,
    isLabelInline = false,
    ...rest
  } = props

  return (
    <Stack>
      {isLabelInline && <Typography className={styles.labelText}>{label}</Typography>}
      <TextField
        {...rest}
        multiline
        maxRows={10}
        label={!isLabelInline && label}
        className={className}
        InputLabelProps={{
          shrink: true,
          classes: InputLabelClasses,
          ...InputLabelProps,
        }}
        FormHelperTextProps={{
          classes: FormHelperTextClasses,
          ...FormHelperTextProps,
        }}
      />
    </Stack>
  )
}

export const TextAreaField = (props: BaseInputProps) => {
  return (
    <BaseTextAreaField
      {...props}
      variant="outlined"
      multiline
      className={clsx(styles.InputField, styles.ContainerInputField, props.className)}
      InputProps={{
        classes: {
          ...InputBaseClasses,
          notchedOutline: styles.NotchedOutline,
        },
        ...props.InputProps,
      }}
    />
  )
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { forwardRef } from 'react'

import { FieldValues, Path, UseFormReturn, ValidationMode, useForm } from 'react-hook-form'
import { FormInputEnum } from './constant'
import { useDebouncedCallback } from 'use-debounce'
import { FormTextField } from './FormControl'
import { ForwardedRef, forwardRef, useEffect, MutableRefObject } from 'react'

export type BaseFormInputs = Record<string, any>

export type UseFormProvider<T extends FieldValues = any> = UseFormReturn<T>

export interface Control<T> {
  name: Path<T>
  defaultValue?: any
  type: FormInputEnum
  required?: { value: boolean; message: string }
  role?: string[]
  label?: string
  placeholder?: string
  className?: string
  pattern?: { value: RegExp; message: string }
  minLength?: { value: number; message: string }
  maxLength?: { value: number; message: string }
  min?: { value: number; message: string }
  max?: { value: number; message: string }
  isShowPassword?: boolean
  disabled?: boolean
  isLabelInline?: boolean
  copy?: boolean
}

interface Props<T extends FieldValues = FieldValues> {
  inputs: Control<T>[]
  mode?: keyof ValidationMode
  handleErrors?: (error?: boolean) => void
  handleFieldsChange?: (value?: Record<string, unknown>) => void
}

const FormWrapper = <T extends FieldValues>(
  props: Props<T>,
  ref: ForwardedRef<UseFormReturn<T>>,
) => {
  const { inputs, mode = 'onSubmit', handleErrors, handleFieldsChange } = props
  const form = useForm<T>({ mode: mode })

  console.log(form)

  useEffect(() => {
    if (ref) (ref as MutableRefObject<UseFormReturn<T>>).current = form
    
  })

  const handleChange = useDebouncedCallback(() => {
    handleFieldsChange && handleFieldsChange(form.getValues())
  }, 2000)

  return (
    <form onChange={handleChange}>
      {inputs.map((i) => {
        switch (i.type) {
          case FormInputEnum.INPUT:
          case FormInputEnum.NUMBER:
          case FormInputEnum.PASSWORD:
            return <FormTextField key={i.name} control={i} form={form} />
          default:
            break
        }
      })}
    </form>
  )
}

export const FormProvider = forwardRef<any, Props>(FormWrapper)
// export const FormProvider

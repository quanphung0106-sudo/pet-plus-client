import { ForwardedRef, MutableRefObject, forwardRef, useEffect } from 'react'
import {
  FieldValues,
  Path,
  PathValue,
  UseFormReturn,
  ValidationMode,
  useForm,
} from 'react-hook-form'
import { isObjectEmpty } from 'src/libs/utils'
import { DataDropdown } from 'src/pages/home'
import { useDebouncedCallback } from 'use-debounce'
import { FormCheckbox } from './FormCheckbox'
import { FormTextField } from './FormControl'
import { FormSelect } from './FormSelect'
import { FormInputEnum } from './constant'
import { FormFileSelect } from './FormFileSelect'

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
  defaultChecked?: PathValue<T, Path<T>> | undefined
  data?: string | DataDropdown[]
  dropdownURL?: string
  fileConfigure?: {
    allowedExtensions?: Array<string>
    maxSize?: number
  }
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

  useEffect(() => {
    handleErrors && handleErrors(!isObjectEmpty(form.formState.errors))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.formState])

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
          case FormInputEnum.EMAIL:
            return <FormTextField key={i.name} control={i} form={form} />
          case FormInputEnum.CHECKBOX:
            return <FormCheckbox key={i.name} control={i} form={form} />
          case FormInputEnum.SELECT:
            return <FormSelect key={i.name} control={i} form={form} />
          case FormInputEnum.FILE:
            return <FormFileSelect key={i.name} control={i} form={form} />
          default:
            break
        }
      })}
    </form>
  )
}

export const FormProvider = forwardRef<any, Props>(FormWrapper)

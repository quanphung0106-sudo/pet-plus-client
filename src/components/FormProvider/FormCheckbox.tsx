import { Checkbox, FormControlLabel } from '@mui/material'
import { Controller, FieldValues } from 'react-hook-form'
import styles from './style.module.scss'
import { Props } from './FormControl'
import clsx from 'clsx'

export const FormCheckbox = <T extends FieldValues>(props: Props<T>) => {
  const { control, form } = props
  const error = form.formState.errors[control.name]

  return (
    <Controller
      defaultValue={control.defaultChecked}
      name={control.name}
      control={form.control}
      rules={{
        required: control.required,
      }}
      render={({ field: { value, onChange } }) => {
        return (
          <FormControlLabel
            control={<Checkbox onChange={(e) => onChange(e.target.checked)} checked={value} />}
            defaultValue={control.defaultValue}
            key={control.name}
            label={control.label}
            className={clsx(control.className, styles.CheckBox, error && styles.CheckBoxError)}
          />
        )
      }}
    />
  )
}

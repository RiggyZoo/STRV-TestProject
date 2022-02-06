import React from 'react'
import { FieldProps, getIn } from 'formik'
import DatePickerContainer from '../DatePickerContainer'

interface DatePickerFieldProps extends FieldProps {
  disabled?: boolean
}
export const DatePickerField: React.FC<FieldProps> = ({
  field,
  form: { touched, errors, setFieldValue },
  ...props
}) => {
  const isTouched = getIn(touched, field.name)
  const error = getIn(errors, field.name)

  return (
    <DatePickerContainer
      date={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val)
      }}
      isTouched={isTouched}
      error={error}
      {...props}
    />
  )
}

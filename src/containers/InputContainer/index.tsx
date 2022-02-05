import React, { FC } from 'react'
import { FieldProps, getIn } from 'formik'
import { Input } from '../../components/Input'

export const InputField: FC<FieldProps> = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  const isTouched = getIn(touched, field.name)
  const error = getIn(errors, field.name)

  return <Input {...field} isTouched={isTouched} error={error} {...props} />
}

import React, { FC, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'
import { Container, InputField, Label, ErrorMessage } from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: ForwardedRef<HTMLInputElement>
  required?: boolean
  disabled?: boolean
  isTouched?: boolean
  error?: string
  label?: string
}

export const Input: FC<InputProps> = forwardRef(
  ({ required, isTouched, error, label, name, disabled, ...rest }, ref) => {
    if (rest.placeholder === undefined) {
      rest.placeholder = ' '
    }

    return (
      <Container errors={Boolean(isTouched && error)}>
        <InputField
          ref={ref}
          disabled={disabled}
          id={name}
          errors={Boolean(isTouched && error)}
          placeholder=" "
          {...rest}
        />
        <Label
          disabled={disabled}
          errors={Boolean(isTouched && error)}
          htmlFor={name}
        >{`${required ? `${label}*` : label}`}</Label>
        {isTouched && error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    )
  },
)

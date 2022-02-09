import React, {
  FC,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useState,
  useEffect,
} from 'react'
import { Container, InputField, Label, ErrorMessage, Icon } from './styles'
import ShowIcon from '../../assets/icons/icon-show.svg'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: ForwardedRef<HTMLInputElement>
  required?: boolean
  disabled?: boolean
  isTouched?: boolean
  error?: string
  label?: string
  onShowPassword?: () => void
}

export const Input: FC<InputProps> = forwardRef(
  (
    {
      required,
      isTouched,
      error,
      label,
      name,
      disabled,
      onShowPassword,
      ...rest
    },
    ref,
  ) => {
    const [type, setType] = useState('text')
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
          type={'text'}
          {...rest}
        />

        <Label
          disabled={disabled}
          errors={Boolean(isTouched && error)}
          htmlFor={name}
        >{`${required ? `${label}*` : label}`}</Label>
        {isTouched && error && <ErrorMessage>{error}</ErrorMessage>}
        {name === 'password' && (
          <Icon src={ShowIcon} alt="icon" onClick={onShowPassword} />
        )}
      </Container>
    )
  },
)

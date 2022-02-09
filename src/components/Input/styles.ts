import { FormikErrors } from 'formik'
import styled, { css } from 'styled-components'
import { colors } from '../../styles/themes'
import Cursor from '../../assets/icons/Pointer.png'

interface InputProps {
  disabled?: boolean
  errors?:
    | FormikErrors<{
        [field: string]: any
      }>
    | boolean
}

export const Container = styled.div<InputProps>`
  position: relative;
`
export const Icon = styled.img`
  position: absolute;
  right: 0;
  z-index: 0;
  cursor: url(${Cursor}), pointer;
`
export const InputField = styled.input<InputProps>`
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  font-size: 1.125rem;
  line-height: 1.5rem;
  border: none;
  font-family: Hind-Regular, sans-serif;
  border-bottom: 1px solid
    ${({ errors }) => (errors ? colors.inputError : colors.inputNormal)};
  background-color: transparent;
  padding: 0 0 0.5rem;
  transition: all 0.1s ease-in-out;
  &:focus {
    border-bottom: 1px solid ${colors.inputValue};
  }
  &:focus + label {
    transform: translateY(-1.5rem) scale(0.9);
  }
  &:not(:placeholder-shown) + label {
    transform: translateY(-1.5rem) scale(0.9);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      pointer-events: none;
    `}
  &::placeholder {
    color: transparent;
  }
`

export const Label = styled.label<InputProps>`
  color: ${colors.inputLabel};
  position: absolute;
  left: 0;

  font-family: Hind-Light, sans-serif;
  font-style: normal;
  font-weight: normal;
  pointer-events: none;
  transform-origin: 0 0;
  transition: transform 0.15s ease-in-out;
`

export const ErrorMessage = styled.span`
  top: 2.5rem;
  left: 0;
  font-family: Hind-Regular, sans-serif;
  position: absolute;
  color: ${colors.inputError};
  font-size: 0.9rem;
`

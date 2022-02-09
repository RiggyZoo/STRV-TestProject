import React, {
  FC,
  OptionHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from 'react'
import { StyledSelect, StyledLabel, Container } from './styles'

const DropdownFilterItem: FC<OptionHTMLAttributes<HTMLOptionElement>> = ({
  children,
  onClick,
  value,
  ...rest
}) => {
  return (
    <option value={value} onClick={onClick} {...rest}>
      {children}
    </option>
  )
}
const DropdownFilter = ({
  children,
  ...rest
}: SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <Container>
      <StyledLabel htmlFor="select">Show:</StyledLabel>
      <StyledSelect name="name" id="select" {...rest}>
        {children}
      </StyledSelect>
    </Container>
  )
}

DropdownFilter.Item = DropdownFilterItem
export { DropdownFilter }

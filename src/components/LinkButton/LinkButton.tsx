import React, { FC, HTMLAttributes } from 'react'
import { StyledButton } from './styles'

export interface LinkButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isActive: boolean
}
const LinkButton: FC<LinkButtonProps> = ({ children, isActive, ...rest }) => {
  return (
    <StyledButton isActive={isActive} {...rest}>
      {children}
    </StyledButton>
  )
}

export { LinkButton }

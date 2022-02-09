import React, { ReactNode, useState } from 'react'
import DropdownIcon from '../../assets/icons/dropdown.svg'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import {
  Container,
  Avatar,
  Name,
  SvgElement,
  DropdownMenuContainer,
  StyledDropDownMenuItem,
} from './styles'

interface DropdownProps {
  children: ReactNode
  firstName?: string
  lastName?: string
}

interface DropDownMenuItemProps {
  children: ReactNode
  onClick: () => void
}

const DropdownMenuItem = ({ children, ...rest }: DropDownMenuItemProps) => {
  return (
    <StyledDropDownMenuItem {...rest}>
      <span>{children}</span>
    </StyledDropDownMenuItem>
  )
}
const Dropdown = ({ firstName, lastName, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const isBreakPoint = useMediaQuery(768)

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <Avatar>
        {firstName?.[0]}
        {lastName?.[0]}
      </Avatar>
      {isBreakPoint && <Name>{`${firstName} ${lastName}`}</Name>}
      <SvgElement src={DropdownIcon} alt="icon" />
      {isOpen && <DropdownMenuContainer>{children}</DropdownMenuContainer>}
    </Container>
  )
}

Dropdown.DropdownItem = DropdownMenuItem
export { Dropdown }

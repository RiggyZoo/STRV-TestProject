import React, { FC, ReactNode, useState } from 'react'
import {
  Container,
  Avatar,
  Name,
  SvgElement,
  DropdownMenuContainer,
  StyledDropDownMenuItem,
  FilterTitle,
} from './styles'
import DropdownIcon from '../../assets/icons/dropdown.svg'
import { useMediaQuery } from '../../hooks/useMediaQuery'

interface DropdownProps {
  children: ReactNode
  firstName?: string
  lastName?: string
  isFilter?: boolean
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
const Dropdown = ({
  firstName,
  lastName,
  children,
  isFilter,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const isBreakPoint = useMediaQuery(768)
  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      {!isFilter ? (
        <Avatar>
          {firstName?.[0]}
          {lastName?.[0]}
        </Avatar>
      ) : (
        <FilterTitle>Show:</FilterTitle>
      )}

      {isBreakPoint && <Name>{`${firstName} ${lastName}`}</Name>}
      <SvgElement src={DropdownIcon} alt="icon" style={{ color: 'red' }} />

      {isOpen && <DropdownMenuContainer>{children}</DropdownMenuContainer>}
    </Container>
  )
}

Dropdown.DropdownItem = DropdownMenuItem
export { Dropdown }

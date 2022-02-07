import React, { useState } from 'react'
import {
  Container,
  Avatar,
  Name,
  SvgElement,
  DropdownMenuContainer,
} from './styles'
import DropdownIcon from '../../assets/icons/dropdown.svg'

interface DropdownProps {
  onLogout: () => void
  firstName?: string
  lastName?: string
}
const Dropdown = ({ onLogout, firstName, lastName }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <Avatar>
        {firstName?.[0]}
        {lastName?.[0]}
      </Avatar>
      <Name>{`${firstName} ${lastName}`}</Name>
      <SvgElement src={DropdownIcon} alt="icon" />

      {isOpen && (
        <DropdownMenuContainer>
          <li>
            <span>My profile</span>
          </li>
          <li onClick={onLogout}>
            <span>Log out</span>
          </li>
        </DropdownMenuContainer>
      )}
    </Container>
  )
}

export { Dropdown }

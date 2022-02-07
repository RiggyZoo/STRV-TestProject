import React, { useState } from 'react'
import {
  Container,
  Avatar,
  Name,
  SvgElement,
  DropdownMenuContainer,
} from './styles'
import DropdownIcon from './dropdown.svg'

interface DropdownProps {
  onLogout: () => void
}
const Dropdown = ({ onLogout }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <Avatar>FN</Avatar>
      <Name>Nikita Filiaiushkin</Name>
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

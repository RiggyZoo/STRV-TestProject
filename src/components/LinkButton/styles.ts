import styled from 'styled-components'
import { LinkButtonProps } from './LinkButton'
import { colors } from '../../styles/themes'

export const StyledButton = styled.button<LinkButtonProps>`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: Hind-SemiBold, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ isActive }) =>
    isActive ? colors.inputValue : colors.linkButtonNonActive};
  transition: color 0.2s;
`

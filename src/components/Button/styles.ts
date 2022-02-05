import styled from 'styled-components'
import { colors } from '../../styles/themes'
import { ButtonSize } from './Button'

interface IButtonProps {
  size: ButtonSize
}
export const DefaultButton = styled.button<IButtonProps>`
  font-size: 1rem;
  position: relative;
  padding: ${({ size }) => size};
  line-height: 2rem;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 4px;
  background: ${colors.primary};
  text-align: center;
  border: none;
  letter-spacing: 1px;
  color: ${colors.white};
  font-family: Hind-Regular, sans-serif;
  transition: all 0.2s;
  &:hover {
    background: ${colors.primaryHover};
  }
`
export const RedButton = styled(DefaultButton)`
  background: ${colors.secondary};
  &:hover {
    background: ${colors.secondaryHover};
  }
`
export const GreyButton = styled(DefaultButton)`
  background: ${colors.grey};
  &:hover {
    background: ${colors.greyHover};
  }
`
export const GhostButton = styled(DefaultButton)`
  background: none;
  color: #a9aeb4;
`
export const RefreshButton = styled(DefaultButton)`
  background: ${colors.inputValue};
  &:hover {
    background: ${colors.inputValue};
  }
`

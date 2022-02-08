import styled from 'styled-components'
import Cursor from '../../assets/icons/Pointer.png'
import { colors } from '../../styles/themes'
import { IButtonProps } from './Button'

export const DefaultButton = styled.button<IButtonProps>`
  font-size: ${({ size }) => (size === 'small' ? '0.875rem' : '1rem')};
  position: relative;
  min-width: ${({ size }) => (size === 'small' ? '6.25rem' : '15rem')};
  padding: ${({ size }) =>
    size === 'small' ? '0.625rem 0 0.5rem 0' : '0.8125rem 0 0.75rem 0'};
  line-height: ${({ size }) => (size === 'small' ? '0.875rem' : '2rem')};
  cursor: url(${Cursor}), pointer;
  text-transform: uppercase;
  border-radius: 4px;
  background: ${colors.primary};
  text-align: center;
  border: none;
  letter-spacing: 1px;
  color: ${colors.white};
  font-family: Hind-Regular, sans-serif;
  transition: all 0.2s;

  & > span {
    background-color: ${({ loading }) => loading && 'red'};
    visibility: ${({ loading }) => loading && 'hidden'};
  }
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

export const RefreshButton = styled(DefaultButton)`
  background: ${colors.inputValue};
  &:hover {
    background: ${colors.inputValue};
  }
`

import styled from 'styled-components'
import { colors } from '../../styles/themes'
import Cursor from '../../assets/icons/Pointer.png'

export const StyledButton = styled.button`
  border-radius: 50%;
  background-color: ${colors.inputValue};
  outline: none;
  line-height: 0;
  padding: 1.3125rem;
  border: none;
  cursor: url(${Cursor}), pointer;
  box-shadow: 0 6px 9px rgba(0, 0, 0, 0.15);
  transition: all 0.2s;
  &:hover {
    background-color: ${colors.circleButtonHovr};
  }
`

export const SvgElement = styled.img``

export const ConfirmButton = styled(StyledButton)`
  background-color: ${colors.primary};

  &:hover {
    background-color: ${colors.primaryHover};
  }
`

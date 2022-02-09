import styled from 'styled-components'
import Cursor from '../../assets/icons/Pointer.png'
import { breakPoints, colors } from '../../styles/themes'

export const Container = styled.div``

export const Content = styled.div`
  position: relative;
  margin: 4.25rem 0.5rem 0 0.5rem;
  @media (min-width: 48em) {
    margin: 6.4375rem 7.5rem 11.5rem;
  } ;
`

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 1.5rem 0 1.5rem;
  @media (min-width: 48em) {
    margin: 2.5rem 2.5rem 0 2.5rem;
  } ;
`

export const LeftContent = styled.img``

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  line-height: 2rem;
  outline: none;
  border: none;
  color: ${colors.inputValue};
  background: transparent;
  cursor: url(${Cursor}), pointer;
`

export const SvgElement = styled.img`
  margin-right: 0.5rem;
`
export const BackButton = styled.div`
  align-self: center;
  cursor: url(${Cursor}), pointer;
`

import styled from 'styled-components'
import { colors } from '../../styles/themes'

export const Container = styled.div`
  & > svg {
    background-color: red;
  }
`

export const SvgIcon = styled.img<{ isActive: boolean }>`
  background-color: black;
  color: red;
  filter: ;
  & > path {
    fill: red;
    background-color: red;
  }
`

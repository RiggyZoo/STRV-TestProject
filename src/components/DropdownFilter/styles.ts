import styled from 'styled-components'
import { colors } from '../../styles/themes'

export const Container = styled.div`
  display: block;
`

export const StyledSelect = styled.select`
  color: ${colors.inputValue};
  padding: 0 1rem 0 0.2rem;
  border: none;
  text-transform: uppercase;
`

export const StyledLabel = styled.label`
  color: ${colors.linkButtonNonActive};
`

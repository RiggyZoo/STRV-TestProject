import styled from 'styled-components'
import { colors } from '../../styles/themes'
import { IEventBoxProps } from './EventBox'

export const Container = styled.div<IEventBoxProps>`
  background: ${colors.white};
  max-width: 24.375rem;
  max-height: 18.5rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`

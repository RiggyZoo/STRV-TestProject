import styled from 'styled-components'
import { colors } from '../../styles/themes'
import { IEventBoxProps } from './EventBox'
import exp from 'constants'

export const Container = styled.div<IEventBoxProps>`
  background: ${colors.white};
  min-width: 24.375rem;
  max-height: 18.5rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  padding: 2rem;
  display: grid;
  grid-template-rows: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 1rem;
`

export const ContentWithButton = styled.div`
  display: flex;
  justify-content: space-between;
`

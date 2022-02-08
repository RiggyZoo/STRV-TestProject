import styled, { css } from 'styled-components'
import { breakPoints, colors } from '../../styles/themes'
import { IEventBoxProps } from './EventBoxList'

export const Container = styled.div<IEventBoxProps>`
  /*  display: flex;
  background: ${colors.white};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;

  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;*/
  background: ${colors.white};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  display: grid;
  padding: 1rem 1rem;

  @media (min-width: ${breakPoints.small}) {
    grid-template-columns: 0.7fr 1fr 1fr 0.5fr 0.3fr 0.5fr;
    grid-template-rows: 1fr;
    grid-column-gap: 40px;
    justify-items: flex-start;
    align-items: center;
    grid-row-gap: 0px;
    padding: 1rem 1.25rem;
  }
`

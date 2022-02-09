import styled from 'styled-components'
import { breakPoints, colors } from '../../styles/themes'

export const FieldsContainer = styled.div`
  min-height: 22rem;
  display: flex;
  padding: 0.5rem 0;
  flex-direction: column;
  justify-content: space-between;
`

export const EventFormContainer = styled.div`
  flex: 3;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  min-width: 23rem;

  padding: 2.5rem 2rem;
  background-color: ${colors.white};

  @media (min-width: ${breakPoints.small}) {
    min-width: 30rem;
  }
`
export const Title = styled.span`
  line-height: 2rem;
  font-size: 1.75rem;
  text-align: center;
  color: ${colors.inputValue};
`

export const SubTitle = styled.span`
  text-align: center;
  font-size: 1.125rem;
  color: ${colors.greySecondary};
`
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

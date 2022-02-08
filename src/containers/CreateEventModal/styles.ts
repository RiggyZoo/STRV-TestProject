import styled from 'styled-components'
import { breakPoints, colors } from '../../styles/themes'
import exp from 'constants'

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  padding: 2.5rem 2rem;
  width: 100%;
  @media (min-width: ${breakPoints.small}) {
    max-width: 30rem;
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

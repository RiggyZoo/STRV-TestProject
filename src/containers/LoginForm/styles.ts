import styled from 'styled-components'
import { breakPoints, colors } from '../../styles/themes'

export const Container = styled.div<{ isBreakPoint: boolean }>`
  display: flex;
  min-width: ${({ isBreakPoint }) => (isBreakPoint ? '30rem' : '23rem')};
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${breakPoints.small}) {
    align-items: flex-start;
  }
`
export const MainTitle = styled.h1`
  font-size: 1.75rem;
  line-height: 3rem;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  @media (min-width: ${breakPoints.small}) {
    text-align: left;
  }
`
export const Title = styled.h3`
  font-size: 1.125rem;
  text-align: center;
  color: ${colors.greySecondary};
  @media (min-width: ${breakPoints.small}) {
    text-align: left;
  }
`
export const FieldsContainer = styled.div`
  display: flex;
  align-content: space-around;
  margin: 4rem 0 2.5rem;
  width: 100%;
  flex-direction: column;
`
export const FieldContainer = styled.div`
  &:first-child {
    margin-bottom: 2rem;
  }
`
export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`
export const ErrorMessage = styled.div`
  font-size: 1.125rem;
  line-height: 1.5rem;
  text-align: center;
  color: ${colors.secondary};
  font-family: Hind-Light, sans-serif;
`

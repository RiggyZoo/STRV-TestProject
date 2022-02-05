import styled from 'styled-components'
import { colors } from '../../styles/themes'

export const Container = styled.div<{ isBreakPoint: boolean }>`
  display: flex;
  min-width: ${({ isBreakPoint }) => (isBreakPoint ? '30rem' : '17rem')};
  justify-content: space-between;
  flex-direction: column;
`
export const MainTitle = styled.h1`
  font-size: 1.75rem;
  line-height: 3rem;
  font-weight: normal;
  font-style: normal;
`
export const Title = styled.h3`
  font-size: 1.125rem;
  color: ${colors.greySecondary};

  font-style: normal;
  font-weight: normal;
`
export const FieldsContainer = styled.div`
  display: flex;
  align-content: space-around;
  margin: 4rem 0;
  flex-direction: column;
`
export const FieldContainer = styled.div`
  &:first-child {
    margin-bottom: 2rem;
  }
`
export const ErrorMessage = styled.div`
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: ${colors.secondary};
  font-family: Hind-Light, sans-serif;
`

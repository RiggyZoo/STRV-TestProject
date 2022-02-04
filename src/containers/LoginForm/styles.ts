import styled from 'styled-components'
import { colors } from '../../styles/themes'

export const Container = styled.div`
  display: flex;
  min-width: 480px;
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
  line-height: 1.5rem;
  font-style: normal;
  font-weight: normal;
`
export const FieldsContainer = styled.div`
  display: flex;
  min-height: 10rem;
  margin-bottom: 4rem;
  flex-direction: column;
  justify-content: space-around;
`

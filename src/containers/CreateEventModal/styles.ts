import styled from 'styled-components'
import { colors } from '../../styles/themes'
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
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  padding: 2.5rem 2rem;
  min-width: 30rem;
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

export const FieldsContainer = styled.div`
  min-height: 22rem;
  display: flex;
  margin: 2.5rem 0;
  flex-direction: column;
  justify-content: space-between;
`
export const FieldContainer = styled.div``

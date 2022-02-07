import styled from 'styled-components'
import { colors } from '../../../styles/themes'

export const Container = styled.span`
  color: ${colors.greySecondary};
  display: inline-block;
  white-space: nowrap;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
`

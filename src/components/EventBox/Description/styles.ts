import styled from 'styled-components'
import { colors } from '../../../styles/themes'

export const Container = styled.span`
  color: ${colors.greySecondary};
  width: 80%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`

import styled from 'styled-components'
import { breakPoints, colors } from '../../../styles/themes'

export const Container = styled.span`
  color: ${colors.greySecondary};
  display: inline-block;
  white-space: nowrap;
  max-width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
  @media (min-width: ${breakPoints.small}) {
    max-width: 100%;
  }
`

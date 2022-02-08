import styled, { css } from 'styled-components'
import { breakPoints } from '../../styles/themes'
import { CircleButtonLayoutProps } from './index'

export const Container = styled.div<CircleButtonLayoutProps>`
  position: ${({ isMobile }) => (isMobile ? 'fixed' : 'fixed')};

  ${({ isMobile }) =>
    isMobile
      ? css`
          right: 2rem;
          bottom: 2rem;
        `
      : css`
          right: 2rem;
          bottom: 2rem;
          /*  float: right;
          margin: 1.5rem 1.5rem;*/
        `}
  @media (min-width: ${breakPoints.small}) {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
  }
`

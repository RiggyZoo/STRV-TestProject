import styled, { css } from 'styled-components'
import { breakPoints } from '../../styles/themes'
import { CircleButtonLayoutProps } from './index'

export const Container = styled.div<CircleButtonLayoutProps>`
  /*  position: ${({ isMobile }) => (isMobile ? 'fixed' : 'sticky')};
/*
  ${({ isMobile }) =>
    isMobile
      ? css`
          right: 2rem;
          bottom: 2rem;
        `
      : css`
          right: 1.5rem;
          bottom: 1.5rem;
          float: right;
          margin: 1.5rem 1.5rem;
        `}*!/*/

  ${({ isConfirm, isMobile }) =>
    isConfirm
      ? css`
          position: fixed;
          right: ${isMobile ? '1rem' : '2rem'};
          bottom: ${isMobile ? '1.5rem' : '2rem'};
        `
      : css`
          display: flex;
          justify-content: flex-end;
          padding: 1.5rem 1rem 1rem;
          @media (min-width: ${breakPoints.small}) {
            position: fixed;
            right: 2rem;
            bottom: 2rem;
          }
        `}
`

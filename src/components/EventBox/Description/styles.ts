import styled, { css } from 'styled-components'
import { breakPoints, colors } from '../../../styles/themes'

export const Container = styled.span<{
  isDetail?: boolean
}>`
  color: ${colors.greySecondary};

  overflow: hidden;
  width: ${({ isDetail }) => (isDetail ? '100%' : '80%')};
  display: ${({ isDetail }) => (isDetail ? 'block' : '-webkit-box')};

  @media (min-width: ${breakPoints.small}) {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`
export const ContainerMobile = styled.div<{ isDetail?: boolean }>`
  color: ${colors.greySecondary};

  overflow: hidden;
  width: ${({ isDetail }) => (isDetail ? '100%' : '80%')};
  display: ${({ isDetail }) => (isDetail ? 'block' : '-webkit-box')};

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

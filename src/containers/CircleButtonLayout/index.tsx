import React, { FC } from 'react'
import { Container } from './styles'

export interface CircleButtonLayoutProps {
  isMobile?: boolean
}
const CircleButtonLayout: FC<CircleButtonLayoutProps> = ({
  children,
  isMobile,
}) => {
  return <Container isMobile={isMobile}>{children}</Container>
}

export default CircleButtonLayout

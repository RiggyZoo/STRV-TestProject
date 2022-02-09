import React, { FC } from 'react'
import { Container } from './styles'

export interface CircleButtonLayoutProps {
  isMobile?: boolean
  isConfirm?: boolean
}
const CircleButtonLayout: FC<CircleButtonLayoutProps> = ({
  children,
  isMobile,
  isConfirm,
}) => {
  return (
    <Container isMobile={isMobile} isConfirm={isConfirm}>
      {children}
    </Container>
  )
}

export default CircleButtonLayout

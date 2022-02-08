import React, { FC } from 'react'
import { Container, Inner } from './styles'

export interface LoaderProps {
  size: 'normal' | 'small'
  top: string
  right: string
}
export const Loader: FC<LoaderProps> = ({
  size = 'normal',
  top = '50%',
  right = '50%',

  ...rest
}) => {
  return (
    <Container>
      <Inner top={top} right={right} size={size}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Inner>
    </Container>
  )
}

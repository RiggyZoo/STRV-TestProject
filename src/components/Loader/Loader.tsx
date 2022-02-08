import React, { FC } from 'react'
import { Container, Inner } from './styles'
import { colors } from '../../styles/themes'

export interface LoaderProps {
  size: 'normal' | 'small' | 'onPage'
  top: string
  right: string
}
export const Loader: FC<LoaderProps> = ({
  size = 'normal',
  top = '50%',
  right = '50%',

  ...rest
}) => {
  const sizeCss = {
    normal: {
      height: '12px',
      transformOrigin: '1px 20.175px',
      color: colors.white,
    },
    small: {
      height: '8px',
      transformOrigin: '1px 12.175px',
      color: colors.white,
    },
    onPage: {
      height: '12px',
      transformOrigin: '1px 20.175px',
      color: colors.inputValue,
    },
  }
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

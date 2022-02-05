import React from 'react'
import { Container, Inner } from './styles'

export const Loader = ({
  size = '1rem',
  white = false,
  top = '50%',
  right = '50%',

  ...rest
}) => {
  return (
    <Container>
      <Inner>
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

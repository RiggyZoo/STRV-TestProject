import React, { FC, useState } from 'react'
import { Container, LeftContent } from './styles'
import LeftContentSvg from './E..svg'
import { Button } from '../../components/Button'
import { Buttons, ButtonSize } from '../../components/Button/Button'
import { LinkButton } from '../../components/LinkButton'

const PageHeader: FC = ({ children }) => {
  return (
    <Container>
      <LeftContent src={LeftContentSvg} />
      <div>dropdown</div>
    </Container>
  )
}

export default PageHeader

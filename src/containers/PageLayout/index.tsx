import React, { FC } from 'react'
import PageHeader from '../PageHeader'
import { Container, Content } from './styles'

const PageLayout: FC = ({ children }) => {
  return (
    <Container>
      <PageHeader />
      <Content>{children}</Content>
    </Container>
  )
}

export default PageLayout

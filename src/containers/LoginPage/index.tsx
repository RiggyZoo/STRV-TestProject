import React from 'react'
import {
  Container,
  TopPart,
  RightContent,
  Title,
  Content,
  Line,
} from './styles'
import LoginForm from '../LoginForm'
import { useMediaQuery } from '../../hooks/useMediaQuery'

const LoginPage = () => {
  const isBreakPoint = useMediaQuery(400)

  console.log(isBreakPoint, 'bereka')
  return (
    <>
      <Container isBreakPoint={isBreakPoint}>
        <TopPart>
          <div>A</div>
          <div>B</div>
        </TopPart>

        {isBreakPoint && (
          <RightContent>
            <Title>
              &quot;Great, kid. Don&apos;t <span style={{ display: 'block' }} />{' '}
              get cocky.&quot;
              <Line />
              <span>Han Solo</span>
            </Title>
          </RightContent>
        )}
        <Content>
          <LoginForm isBreakPoint={isBreakPoint} />
        </Content>
      </Container>
    </>
  )
}

export default LoginPage

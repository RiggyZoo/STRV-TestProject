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

const LoginPage = () => {
  return (
    <>
      <Container>
        {/*   <TopPart>
          <div>Easdl;asdlasjdnalsjdnaslkjdnaskldjn.</div>
          <div>Log</div>
        </TopPart>*/}

        <RightContent>
          <Title>
            &quot;Great, kid. Don&apos;t <span style={{ display: 'block' }} />{' '}
            get cocky.&quot;
            <Line />
            <span>Han Solo</span>
          </Title>
        </RightContent>
        <Content>
          <LoginForm />
        </Content>
      </Container>
    </>
  )
}

export default LoginPage

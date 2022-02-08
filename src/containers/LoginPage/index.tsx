import React, { FC } from 'react'
import {
  ButtonContainer,
  Container,
  Content,
  ErrorMessage,
  ErrorMessageMainTitle,
  ErrorMessageSubTitle,
  ImageDartVader,
  Line,
  RightContent,
  Title,
  TopPart,
} from './styles'
import DartVader from '../../assets/img/icon.png'
import LoginForm from '../LoginForm'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { Button } from '../../components/Button'

import { useHistory } from 'react-router-dom'

interface ILoginPageProps {
  error?: boolean
}
const LoginPage: FC<ILoginPageProps> = ({ error }) => {
  const isBreakPoint = useMediaQuery(400)
  const history = useHistory()

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
            {error && <ImageDartVader src={DartVader} />}
          </RightContent>
        )}
        <Content>
          {' '}
          {error ? (
            <ErrorMessage>
              <ErrorMessageMainTitle>
                Something went wrong.
              </ErrorMessageMainTitle>
              <ErrorMessageSubTitle>
                Seems like Darth Vader just hits our website and drops it down.
                <span style={{ display: 'block' }} />
                Please press the refresh button and everything should be fine
                again.
              </ErrorMessageSubTitle>
              <ButtonContainer>
                <Button
                  theme="refresh"
                  size="main"
                  loading={false}
                  onClick={() => history.push('/events/all')}
                >
                  refresh
                </Button>
              </ButtonContainer>
            </ErrorMessage>
          ) : (
            <LoginForm isBreakPoint={isBreakPoint} />
          )}
        </Content>
      </Container>
    </>
  )
}

export default LoginPage

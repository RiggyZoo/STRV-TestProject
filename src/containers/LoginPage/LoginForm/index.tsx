import React, { FC, useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Field, Form, Formik, FormikHelpers, FormikProps } from 'formik'
import {
  Container,
  ErrorMessage,
  FieldContainer,
  FieldsContainer,
  MainTitle,
  SignUpContainer,
  Title,
} from './styles'
import { InputField } from '../../../helpers/InputContainer'
import { Button } from '../../../components/Button'
import { useCurrentUser } from '../../../contexts/CurrentUser'
import { setRefreshToken, setToken, setUserInfo } from '../../../utils/userData'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import api from '../../../api'
import { AxiosResponse } from 'axios'
import { RightContent, SignUpButton } from '../styles'

interface LoginForm {
  email: string
  password: string
}
const LoginForm: FC<{ isBreakPoint: boolean }> = ({ isBreakPoint }) => {
  const [isError, setIsError] = useState<boolean>(false)
  const { setAuthed, setUserData } = useCurrentUser()
  const [showPassword, setShowPassword] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const initValues = {
    email: '',
    password: '',
  }
  const handleSubmit = async (
    values: LoginForm,
    actions: FormikHelpers<LoginForm>,
  ) => {
    actions.setSubmitting(true)
    setIsLoading(true)
    try {
      await api
        .login({ ...values, email: values.email.toLowerCase() })
        .then((result: AxiosResponse) => {
          if (result.status === 200) {
            setAuthed(true)
            setToken(result.headers.authorization)
            setRefreshToken(result.headers['refresh-token'])
            setUserInfo(result.data)
            setUserData(result.data)
          }
          localStorage.setItem('events', 'all')
          history.push('/events/all')
        })
    } catch (e: any) {
      if (e.response.status === 400) {
        setIsError(true)
        actions.setErrors({ email: ' ', password: ' ' })
      }
    }
    actions.setSubmitting(false)
    setIsLoading(false)
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Formik initialValues={initValues} onSubmit={handleSubmit}>
      {(props: FormikProps<any>) => (
        <Form>
          <Container isBreakPoint={isBreakPoint}>
            <MainTitle>Sign in to Eventio.</MainTitle>

            {isError ? (
              <ErrorMessage>
                Oops! That email and password combination is not valid.
              </ErrorMessage>
            ) : (
              <Title>Enter your details below.</Title>
            )}
            <FieldsContainer>
              <FieldContainer>
                <Field
                  type="text"
                  name="email"
                  label="Email"
                  component={InputField}
                />
              </FieldContainer>
              <FieldContainer>
                <Field
                  onShowPassword={() => togglePassword()}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  label="Password"
                  component={InputField}
                />
              </FieldContainer>
              {!isBreakPoint && (
                <SignUpContainer>
                  <RightContent>
                    Don’t have account?<SignUpButton>SIGN UP</SignUpButton>
                  </RightContent>
                </SignUpContainer>
              )}
            </FieldsContainer>

            <div>
              <Button
                disabled={props.isSubmitting}
                type="submit"
                theme="green"
                size="main"
                $loading={isLoading}
              >
                Sign in
              </Button>
            </div>
          </Container>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm

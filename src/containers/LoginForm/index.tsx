import React, { FC, useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import {
  Container,
  ErrorMessage,
  FieldContainer,
  FieldsContainer,
  MainTitle,
  Title,
} from './styles'
import { InputField } from '../InputContainer'
import { Button } from '../../components/Button'
import { useCurrentUser } from '../../contexts/CurrentUser'
import { setRefreshToken, setToken, setUserInfo } from '../../utils/token'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import api from '../../api'
import { AxiosResponse } from 'axios'

interface LoginForm {
  email: string
  password: string
}
const LoginForm: FC<{ isBreakPoint: boolean }> = ({ isBreakPoint }) => {
  const [isError, setIsError] = useState<boolean>(false)
  const { setAuthed, setUserData } = useCurrentUser()

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
      await api.login(values).then((result: AxiosResponse) => {
        console.log(result.headers.authorization)
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
      console.log(e.response?.status)
      if (e.response.status === 400) {
        setIsError(true)
        actions.setErrors({ email: ' ', password: ' ' })
      }
    }
    actions.setSubmitting(false)
    setIsLoading(false)
  }

  return (
    <Formik initialValues={initValues} onSubmit={handleSubmit}>
      {(props) => (
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
                  type="password"
                  name="password"
                  label="Password"
                  component={InputField}
                />
              </FieldContainer>
            </FieldsContainer>
            <div>
              <Button
                disabled={props.isSubmitting}
                type="submit"
                theme="green"
                size="main"
                loading={isLoading}
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

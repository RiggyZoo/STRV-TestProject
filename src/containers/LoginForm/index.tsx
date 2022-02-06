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
import { Buttons, ButtonSize } from '../../components/Button/Button'
import { connector } from '../../connector/connector'
import { login } from '../../services/login'
import { useCurrentUser } from '../../contexts/CurrentUser'
import { setUser } from '../../helpers/currentUser'
import { setToken } from '../../utils/token'
import { useHistory } from 'react-router-dom'

interface LoginForm {
  email: string
  password: string
}
const LoginForm: FC<{ isBreakPoint: boolean }> = ({ isBreakPoint }) => {
  const [isError, setIsError] = useState<boolean>(false)
  const { setAuthed, setUserData } = useCurrentUser()
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
    const { data, jwt, status } = await login(values)
    console.log(data, 'daraa')
    if (data && status === 200) {
      setUserData(data)
      setAuthed(true)
      setToken(jwt)
      window.localStorage.setItem('user', JSON.stringify(data))
      history.push('/events')

      /*  window.location.reload()*/
    }

    if (status === 400) {
      setIsError(true)
      actions.setErrors({ email: ' ', password: ' ' })
    }
    actions.setSubmitting(false)
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
                type="submit"
                theme={Buttons.default}
                size={ButtonSize.main}
                loading={false}
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

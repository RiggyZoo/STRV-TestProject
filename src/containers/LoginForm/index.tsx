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

interface LoginForm {
  email: string
  password: string
}
const LoginForm: FC<{ isBreakPoint: boolean }> = ({ isBreakPoint }) => {
  const [isError, setIsError] = useState<boolean>(false)
  const initValues = {
    email: '',
    password: '',
  }
  const handleSubmit = (
    values: LoginForm,
    actions: FormikHelpers<LoginForm>,
  ) => {
    const fetchData = async (p: any) => {
      const { data, jwt, status } = await connector.post('auth/native', p)
      console.log(data)
      if (status === 400) {
        setIsError(true)
        actions.setErrors({ email: ' ', password: ' ' })
      }
      console.log(jwt)
    }
    fetchData(values)
  }

  useEffect(() => {
    const p = {
      email: 'robert.rossmann@strv.com',
      password: 'top secret!',
    }
  }, [])

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

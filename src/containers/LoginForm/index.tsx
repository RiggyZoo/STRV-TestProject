import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { Container, FieldsContainer, MainTitle, Title } from './styles'
import { InputField } from '../InputContainer'
import { Button } from '../../components/Button'
import { Buttons, ButtonSize } from '../../components/Button/Button'
import { connector } from '../../connector/connector'

interface LoginForm {
  email: string
  password: string
}
const LoginForm = () => {
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
      }
      console.log(jwt)
    }
    fetchData(values)
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('sd'),
  })

  useEffect(() => {
    const p = {
      email: 'robert.rossmann@strv.com',
      password: 'top secret!',
    }
  }, [])

  return (
    <Formik
      initialValues={initValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(props) => (
        <Form>
          <Container>
            <MainTitle>Sign in to Eventio.</MainTitle>

            {isError ? (
              <div>is Error</div>
            ) : (
              <Title>Enter your details below.</Title>
            )}
            <FieldsContainer>
              <Field
                type="text"
                name="email"
                label="Email"
                component={InputField}
              />
              <Field
                type="password"
                name="password"
                label="Password"
                component={InputField}
              />
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

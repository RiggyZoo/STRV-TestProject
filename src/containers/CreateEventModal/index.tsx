import React, { FC } from 'react'
import PageLayout from '../PageLayout'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { ErrorMessage, MainTitle } from '../LoginForm/styles'
import {
  Container,
  Title,
  SubTitle,
  ModalWrapper,
  FieldsContainer,
  FieldContainer,
} from './styles'
import { InputField } from '../InputContainer'
import { Button } from '../../components/Button'
import { Buttons, ButtonSize } from '../../components/Button/Button'

interface CreateModalProps {
  onClose: () => void
}
const CreateEventModal: FC<CreateModalProps> = ({ onClose }) => {
  const initValues = {}
  return (
    <PageLayout isModal={true} onClose={onClose}>
      <ModalWrapper>
        {' '}
        <Container>
          <Title>Create new event</Title>
          <SubTitle>Enter details below.</SubTitle>
          <Formik initialValues={initValues} onSubmit={() => alert('submit')}>
            {(props) => (
              <Form>
                <FieldsContainer>
                  <FieldContainer>
                    <Field
                      type="text"
                      name="Title"
                      label="Title"
                      component={InputField}
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Field
                      type="text"
                      name="Description"
                      label="Description"
                      component={InputField}
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Field
                      type="date"
                      name="Date"
                      label="Date"
                      component={InputField}
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Field
                      type="time"
                      name="Time"
                      label="Time"
                      component={InputField}
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Field
                      type="text"
                      name="Capacity"
                      label="Capacity"
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
              </Form>
            )}
          </Formik>
        </Container>
      </ModalWrapper>
    </PageLayout>
  )
}

export default CreateEventModal

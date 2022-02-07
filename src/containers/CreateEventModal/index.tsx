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
import { DatePickerField } from '../DatePickerField'
import { validationSchema } from './schema'
import { useHistory, useLocation } from 'react-router-dom'
import { createEvent } from '../../services/events'

interface CreateModalProps {
  onClose: () => void
  onReset: () => void
}

interface EventForm {
  title: string
  description: string
  startsAt: string
  capacity: number
}
const CreateEventModal: FC<CreateModalProps> = ({ onClose, onReset }) => {
  const history = useHistory()
  const location = useLocation()

  const initValues = {
    capacity: '',
    title: '',
    description: '',
    startsAt: '',
    time: '',
  }

  const createEventHandler = async (
    values: any,
    actions: FormikHelpers<any>,
  ) => {
    const hours = values.time.getHours()
    const minutes = values.time.getMinutes()
    const seconds = values.time.getSeconds()
    const correctTimeAndDate = values.startsAt.setHours(hours, minutes, seconds)

    delete values.time

    const { status } = await createEvent({
      ...values,
      startsAt: new Date(correctTimeAndDate),
    })
    console.log(status)
    if (status === 201) {
      console.log(1)
      onClose()
      onReset()
    }
  }

  //TODO: Separate form from this file
  return (
    <PageLayout isModal={true} onClose={onClose}>
      <ModalWrapper>
        {' '}
        <Container>
          <Title>Create new event</Title>
          <SubTitle>Enter details below.</SubTitle>
          <Formik
            initialValues={initValues}
            validationSchema={validationSchema}
            onSubmit={createEventHandler}
          >
            {(props) => (
              <Form>
                <FieldsContainer>
                  <FieldContainer>
                    <Field
                      type="text"
                      name="title"
                      label="Title"
                      component={InputField}
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Field
                      type="text"
                      name="description"
                      label="Description"
                      component={InputField}
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Field
                      name="startsAt"
                      minDate={new Date()}
                      label="Date"
                      component={DatePickerField}
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Field
                      selectedDateFromField={props.values.startsAt}
                      isTime={true}
                      disabled={!props.values.startsAt}
                      minDate={new Date()}
                      name="time"
                      label="Time"
                      component={DatePickerField}
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Field
                      name="capacity"
                      label="Capacity"
                      component={InputField}
                    />
                  </FieldContainer>
                </FieldsContainer>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    type="submit"
                    theme={Buttons.default}
                    size={ButtonSize.main}
                    loading={false}
                  >
                    create new event
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

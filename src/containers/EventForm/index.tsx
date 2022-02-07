import React, { FC, useEffect, useState } from 'react'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { validationSchema } from './schema'
import { FieldContainer, FieldsContainer, ConfirmButtonWrapper } from './styles'
import { InputField } from '../InputContainer'
import { DatePickerField } from '../DatePickerField'
import { Button } from '../../components/Button'
import { Buttons, ButtonSize } from '../../components/Button/Button'
import { useHistory, useLocation } from 'react-router-dom'
import { createEvent, getOneEvent, updateEvent } from '../../services/events'
import { CircleButton } from '../../components/CircleButton'
import { CircleButtons } from '../../components/CircleButton/CircleButton'
import { useCurrentUser } from '../../contexts/CurrentUser'

interface EventFormProps {
  onClose: () => void
  onReset: () => void
  eventID?: string
}
const EventForm: FC<EventFormProps> = ({ onClose, onReset, eventID }) => {
  const history = useHistory()
  const [event, setEvent] = useState<any>()

  useEffect(() => {
    if (!eventID) return
    const fetchData = async () => {
      const { data } = await getOneEvent(eventID)

      setEvent(data)
    }
    fetchData()
  }, [eventID])

  const initValues = {
    capacity: '' || event?.capacity,
    title: '' || event?.title,
    description: '' || event?.description,
    startsAt: '' || event?.startsAt,
    time: '' || event?.startsAt,
  }

  const createEventHandler = async (
    values: any,
    actions: FormikHelpers<any>,
  ) => {
    console.log(values, 'val')
    //TODO: Maybe use localstorage to save page when we were?
    if (JSON.stringify(initValues) === JSON.stringify(values)) {
      history.push('/events/all')
    }
    const hours = new Date(values.time).getHours()
    const minutes = new Date(values.time).getMinutes()
    const seconds = new Date(values.time).getSeconds()
    const correctTimeAndDate = new Date(values.startsAt).setHours(
      hours,
      minutes,
      seconds,
    )

    delete values.time

    console.log(values, '222')

    const { status } = eventID
      ? await updateEvent(
          { ...values, startsAt: new Date(correctTimeAndDate) },
          eventID,
        )
      : await createEvent({
          ...values,
          startsAt: new Date(correctTimeAndDate),
        })

    if (eventID && status === 200) {
      onClose()
    }
    if (status === 400) {
      actions.setFieldError('time', 'Start of event must be in future')
    }
    if (status === 201) {
      onClose()
      onReset()
    }
  }
  return (
    <>
      <Formik
        initialValues={initValues}
        validationSchema={validationSchema}
        onSubmit={createEventHandler}
        enableReinitialize={true}
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
            {!eventID ? (
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
            ) : (
              <ConfirmButtonWrapper>
                <CircleButton type="submit" theme={CircleButtons.confirm} />
              </ConfirmButtonWrapper>
            )}
          </Form>
        )}
      </Formik>
    </>
  )
}

export { EventForm }

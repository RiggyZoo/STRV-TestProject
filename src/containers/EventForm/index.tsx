import React, { FC, useEffect, useState } from 'react'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { validationSchema } from './schema'
import { FieldContainer, FieldsContainer } from './styles'
import { InputField } from '../InputContainer'
import { DatePickerField } from '../DatePickerField'
import { Button } from '../../components/Button'
import { Buttons, ButtonSize } from '../../components/Button/Button'
import { useHistory, useLocation } from 'react-router-dom'
import { createEvent, getOneEvent } from '../../services/events'

interface EventFormProps {
  onClose: () => void
  onReset: () => void
  eventID?: string
}
const EventForm: FC<EventFormProps> = ({ onClose, onReset, eventID }) => {
  const history = useHistory()
  const location = useLocation()
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
  console.log(initValues.time, 'time')
  console.log(initValues.startsAt, 'time')

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

    if (status === 400) {
      actions.setFieldError('time', 'Start of event must be in future')
    }
    if (status === 201) {
      console.log(1)
      onClose()
      onReset()
    }
  }
  return (
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
              <Field name="capacity" label="Capacity" component={InputField} />
            </FieldContainer>
          </FieldsContainer>
          {!eventID && (
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
          )}
        </Form>
      )}
    </Formik>
  )
}

export { EventForm }

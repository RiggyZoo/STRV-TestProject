import React, { FC, useEffect, useState } from 'react'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { validationSchema } from './schema'
import { FieldsContainer } from './styles'
import { InputField } from '../InputContainer'
import { DatePickerField } from '../DatePickerField'
import { Button } from '../../components/Button'
import { useHistory } from 'react-router-dom'
import { CircleButton } from '../../components/CircleButton'
import CircleButtonLayout from '../CircleButtonLayout'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import api from '../../api'
import { AxiosResponse } from 'axios'

interface EventFormProps {
  onClose: () => void
  onReset: () => void
  eventID?: string
}
const EventForm: FC<EventFormProps> = ({ onClose, onReset, eventID }) => {
  const history = useHistory()
  const [event, setEvent] = useState<any>()
  const isBreakPoint = useMediaQuery(768)

  const fetchOneEvent = async (id: string) => {
    try {
      await api.getOneEvent(id).then((res: AxiosResponse) => {
        if (res.status === 200) {
          setEvent(res.data)
        }
      })
    } catch (e) {
      history.push('/404')
    }
  }
  useEffect(() => {
    if (!eventID) return

    fetchOneEvent(eventID)
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
    try {
      eventID
        ? await api
            .updateAnEvent(eventID, {
              ...values,
              startsAt: new Date(correctTimeAndDate),
            })
            .then((res: AxiosResponse) => {
              if (res.status === 200) {
                onClose()
              }
            })
        : await api
            .creatAnEvent({ ...values, startsAt: new Date(correctTimeAndDate) })
            .then((res: AxiosResponse) => {
              if (res.status === 201) {
                onClose()
                onReset()
              }
            })
    } catch (e: any) {
      if (e.response?.status === 400) {
        actions.setFieldError('time', 'Start of event must be in future')
      }
    }
    /* const { status } = eventID
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
    }*/
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
              {eventID ? (
                <>
                  <Field
                    name="startsAt"
                    minDate={new Date()}
                    label="Date"
                    component={DatePickerField}
                  />
                  <Field
                    selectedDateFromField={props.values.startsAt}
                    isTime={true}
                    disabled={!props.values.startsAt}
                    minDate={new Date()}
                    name="time"
                    label="Time"
                    component={DatePickerField}
                  />
                  <Field
                    type="text"
                    name="title"
                    label="Title"
                    component={InputField}
                  />

                  <Field
                    type="text"
                    name="description"
                    label="Description"
                    component={InputField}
                  />
                </>
              ) : (
                <>
                  <Field
                    type="text"
                    name="title"
                    label="Title"
                    component={InputField}
                  />

                  <Field
                    type="text"
                    name="description"
                    label="Description"
                    component={InputField}
                  />

                  <Field
                    name="startsAt"
                    minDate={new Date()}
                    label="Date"
                    component={DatePickerField}
                  />

                  <Field
                    selectedDateFromField={props.values.startsAt}
                    isTime={true}
                    disabled={!props.values.startsAt}
                    minDate={new Date()}
                    name="time"
                    label="Time"
                    component={DatePickerField}
                  />
                </>
              )}

              <Field name="capacity" label="Capacity" component={InputField} />
            </FieldsContainer>
            {!eventID ? (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="submit" theme="green" size="main" loading={false}>
                  create new event
                </Button>
              </div>
            ) : (
              <CircleButtonLayout isMobile={!isBreakPoint} isConfirm={true}>
                <CircleButton type="submit" theme="confirm" />
              </CircleButtonLayout>
            )}
          </Form>
        )}
      </Formik>
    </>
  )
}

export { EventForm }

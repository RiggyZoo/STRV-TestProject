import React, { FC } from 'react'
import PageLayout from '../PageLayout'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { ErrorMessage, MainTitle } from '../LoginForm/styles'
import { Container, ModalWrapper } from './styles'
import { EventForm } from '../EventForm'

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
  //TODO: Separate form from this file
  return (
    <PageLayout isModal={true} onClose={onClose}>
      <ModalWrapper>
        <Container>
          <EventForm onClose={onClose} onReset={onReset} />
        </Container>
      </ModalWrapper>
    </PageLayout>
  )
}

export default CreateEventModal

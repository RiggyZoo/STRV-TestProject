import React, { useEffect, useRef, useState } from 'react'
import PageLayout from '../../containers/PageLayout'
import { useHistory, useParams } from 'react-router-dom'
import { deleteEvent, getOneEvent } from '../../services/events'
import { useCurrentUser } from '../../contexts/CurrentUser'
import {
  Attendees,
  AttendItem,
  AttendItemWrapper,
  AttendTitle,
  ContentHeader,
  ContentWrapper,
  DeleteButton,
  EventDetailTitle,
  EventDetailWrapper,
  EventFormContainer,
  SvgElement,
} from './styles'
import { EventBox } from '../../components/EventBox'
import { defineButton } from '../../helpers/defineButton'
import { EventForm } from '../../containers/EventForm'
import TrashIcon from '../../assets/icons/trashIcon.svg'

import { useMediaQuery } from '../../hooks/useMediaQuery'
import { Loader } from '../../components/Loader'

interface Params {
  id: string
}

//TODO: End types in scr/types

interface Owner {
  email: string
  firstName: string
  id: string
  lastName: string
  __v: number
  _id: string
}
interface Event {
  id: string
  capacity: number
  startsAt: string
  description: string
  title: string
  owner: Owner
  attendees: Owner[]
}
const EventDetail = () => {
  const [isMyEvent, setIsMyEvent] = useState(() => false)
  const [isLoading, setIsLoading] = useState(false)
  const [event, setEvent] = useState<Event>()
  const [reset, setReset] = useState(false)
  const { userData } = useCurrentUser()
  const history = useHistory()
  const isBreakPoint = useMediaQuery(768)
  const { id } = useParams<Params>()

  console.log(isBreakPoint, 'isBreakPoint')
  const onReset = () => {
    setReset((reset) => !reset)
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data, status } = await getOneEvent(id)

      if (status === 400) {
        history.push('/404')
      }

      console.log(userData, 'dataa')
      debugger
      if (userData?._id === data.owner._id) {
        setIsMyEvent(true)
        setEvent(data)
      }
      setEvent(data)
      setIsLoading(false)
    }
    fetchData()
  }, [id, reset])

  const onDeleteEvent = async (id: any) => {
    const response = await deleteEvent(id)
    history.push('/events/all')
  }
  console.log(isMyEvent, 'isMyEvent')
  return (
    <PageLayout isDetail={!isMyEvent}>
      <ContentHeader>
        <EventDetailTitle>{`Detail:${event?.id}`}</EventDetailTitle>
        {isMyEvent && (
          <DeleteButton onClick={() => onDeleteEvent(event?.id)}>
            <SvgElement src={TrashIcon} alt="icon" />
            {isBreakPoint && 'Delete event'}
          </DeleteButton>
        )}
      </ContentHeader>

      <ContentWrapper>
        {isMyEvent ? (
          <EventFormContainer>
            <EventForm
              eventID={event?.id}
              onClose={() => history.push('/events/all')}
              onReset={() => {}}
            />
          </EventFormContainer>
        ) : (
          <EventDetailWrapper>
            <EventBox style={{ minWidth: '100%' }}>
              <EventBox.Date date={event?.startsAt} />
              <EventBox.Name>{event?.title}</EventBox.Name>
              <EventBox.Owner>
                {event?.owner.firstName} {event?.owner.lastName}
              </EventBox.Owner>
              <EventBox.Description>{event?.description}</EventBox.Description>
              <EventBox.Capacity
                attendees={event?.attendees.length}
                capacity={event?.capacity}
              >
                {event &&
                  defineButton(
                    userData,
                    event,
                    history,
                    onReset,
                    isLoading,
                    setIsLoading,
                  )}
              </EventBox.Capacity>
            </EventBox>
          </EventDetailWrapper>
        )}
        {
          <Attendees>
            <AttendTitle>Attendees</AttendTitle>
            <AttendItemWrapper>
              {isMyEvent && <AttendItem isMyEvent={true}>You</AttendItem>}
              {event?.attendees.map((item) => (
                <AttendItem key={item._id} isMyEvent={false}>
                  {item.firstName} {item.lastName}
                </AttendItem>
              ))}
            </AttendItemWrapper>
          </Attendees>
        }
      </ContentWrapper>
    </PageLayout>
  )
}

export default EventDetail

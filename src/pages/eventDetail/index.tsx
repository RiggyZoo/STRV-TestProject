import React, { useEffect, useState } from 'react'
import PageLayout from '../../containers/PageLayout'
import { useHistory, useParams } from 'react-router-dom'
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
import api from '../../api'
import { AxiosResponse } from 'axios'
import { getUserInfo } from '../../utils/token'
import CreateEventModal from '../../containers/CreateEventModal'
import CircleButtonLayout from '../../containers/CircleButtonLayout'
import { CircleButton } from '../../components/CircleButton'

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
  const [isModal, setIsModal] = useState<boolean>()
  const [amIAttended, setAmIAttended] = useState<boolean>()
  const [reset, setReset] = useState(false)
  const userData = getUserInfo()
  const history = useHistory()
  const isBreakPoint = useMediaQuery(768)
  const { id } = useParams<Params>()

  console.log(isBreakPoint, 'isBreakPoint')
  const onReset = () => {
    setReset((reset) => !reset)
  }

  const fetchOneEvent = async () => {
    try {
      setIsLoading(true)
      await api.getOneEvent(id).then((result: AxiosResponse) => {
        if (result.status === 200) {
          if (result.data.owner._id === userData?._id) {
            setIsMyEvent(true)
          }

          setEvent(result.data)

          setAmIAttended(
            result.data.attendees.filter(
              (item: any) => item._id === userData?._id,
            ).length > 0,
          )

          setIsLoading(false)
        }
      })
    } catch (e: any) {
      if (e.response?.status === 400) {
        history.push('/404')
      }
    }
  }

  useEffect(() => {
    fetchOneEvent()
  }, [id, reset])

  const onDeleteEvent = async (id: any) => {
    try {
      await api.deleteEvent(id).then((result: AxiosResponse) => {
        if (result.status === 204) {
          history.push('/events/all')
        }
      })
    } catch (e) {}
  }

  console.log(amIAttended)

  return (
    <>
      {isModal && (
        <CreateEventModal
          onClose={() => setIsModal(false)}
          onReset={() => setReset(!reset)}
        />
      )}

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
                <EventBox.Description>
                  {event?.description}
                </EventBox.Description>
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
          {isBreakPoint ? (
            <Attendees>
              <AttendTitle>Attendees</AttendTitle>
              <AttendItemWrapper>
                {amIAttended && <AttendItem isMyEvent={true}>You</AttendItem>}
                {event?.attendees.map((item) => (
                  <AttendItem key={item._id} isMyEvent={false}>
                    {item.firstName} {item.lastName}
                  </AttendItem>
                ))}
              </AttendItemWrapper>
            </Attendees>
          ) : !isMyEvent ? (
            <Attendees>
              <AttendTitle>Attendees</AttendTitle>
              <AttendItemWrapper>
                {amIAttended && <AttendItem isMyEvent={true}>You</AttendItem>}
                {event?.attendees.map((item) => (
                  <AttendItem key={item._id} isMyEvent={false}>
                    {item.firstName} {item.lastName}
                  </AttendItem>
                ))}
              </AttendItemWrapper>
            </Attendees>
          ) : null}
        </ContentWrapper>
      </PageLayout>
      {!isModal && (
        <CircleButtonLayout isConfirm={true}>
          <CircleButton theme="default" onClick={() => setIsModal(true)} />
        </CircleButtonLayout>
      )}
    </>
  )
}

export default EventDetail

import React, { useEffect, useRef, useState } from 'react'
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
import { getUserInfo } from '../../utils/userData'
import CreateEventModal from '../../containers/CreateEventModal'
import CircleButtonLayout from '../../helpers/CircleButtonLayout'
import { CircleButton } from '../../components/CircleButton'
import { Events } from '../../types/events'
import { useFormikContext } from 'formik'

interface Params {
  id: string
}

const EventDetail = () => {
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(true)
  const [isMyEvent, setIsMyEvent] = useState(() => false)
  const [isLoading, setIsLoading] = useState(false)
  const [event, setEvent] = useState<Events>()
  const [isModal, setIsModal] = useState<boolean>()
  const [amIAttended, setAmIAttended] = useState<boolean>()
  const [reset, setReset] = useState(false)
  const userData = getUserInfo()
  const history = useHistory()
  const isBreakPoint = useMediaQuery(768)
  const { id } = useParams<Params>()

  const onReset = () => {
    setReset((reset) => !reset)
  }

  const fetchOneEvent = async () => {
    try {
      setIsLoading(true)
      await api.getOneEvent(id).then((result: AxiosResponse) => {
        if (result.status === 200) {
          if (result.data.owner._id === userData?._id) {
            if (new Date(result.data.startsAt) < new Date()) {
              setIsMyEvent(false)
            } else {
              setIsMyEvent(true)
            }
          }

          setEvent(result.data)

          setAmIAttended(
            result.data.attendees.filter(
              (item: any) => item._id === userData?._id,
            ).length > 0,
          )

          setIsLoading(false)
          setIsLoadingPage(false)
        }
      })
    } catch (e: any) {
      if (e.response?.status === 400) {
        history.push('/404')
      }
    }
  }

  useEffect(() => {
    setIsLoadingPage(true)
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

  return (
    <>
      {isModal ? (
        <CreateEventModal
          onClose={() => setIsModal(false)}
          onReset={() => setReset(!reset)}
        />
      ) : (
        <>
          <PageLayout isDetail={!isMyEvent}>
            {!isLoadingPage ? (
              <>
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
                    <EventForm
                      eventID={event?.id}
                      onClose={() => history.push('/events/all')}
                      onReset={() => {}}
                    />
                  ) : (
                    <EventDetailWrapper>
                      <EventBox
                        isDetail={true}
                        date={event?.startsAt}
                        attendees={event?.attendees.length}
                        capacity={event?.capacity}
                        description={event?.description}
                        name={event?.title}
                        owner={`${event?.owner.firstName} ${event?.owner.lastName}`}
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
                      </EventBox>
                    </EventDetailWrapper>
                  )}
                  {isBreakPoint ? (
                    <Attendees>
                      <AttendTitle>Attendees</AttendTitle>
                      <AttendItemWrapper>
                        {amIAttended && (
                          <AttendItem amIAttended={true}>You</AttendItem>
                        )}
                        {event?.attendees.map((item) => (
                          <>
                            {item._id !== userData._id && (
                              <AttendItem key={item._id} amIAttended={false}>
                                {item.firstName} {item.lastName}
                              </AttendItem>
                            )}
                          </>
                        ))}
                      </AttendItemWrapper>
                    </Attendees>
                  ) : !isMyEvent ? (
                    <Attendees>
                      <AttendTitle>Attendees</AttendTitle>
                      <AttendItemWrapper>
                        {amIAttended && (
                          <AttendItem amIAttended={amIAttended}>You</AttendItem>
                        )}
                        {event?.attendees.map((item) => (
                          <>
                            {item._id !== userData._id && (
                              <AttendItem key={item._id} amIAttended={false}>
                                {item.firstName} {item.lastName}
                              </AttendItem>
                            )}
                          </>
                        ))}
                      </AttendItemWrapper>
                    </Attendees>
                  ) : null}
                </ContentWrapper>
                {!isModal && !isMyEvent && (
                  <CircleButtonLayout>
                    <CircleButton
                      theme="default"
                      onClick={() => setIsModal(true)}
                    />
                  </CircleButtonLayout>
                )}
              </>
            ) : (
              <Loader size="onPage" top="100%" right="50%" />
            )}
          </PageLayout>
        </>
      )}
    </>
  )
}

export { EventDetail }

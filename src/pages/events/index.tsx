import React, { RefObject, useEffect, useRef, useState } from 'react'
import { EventBox } from '../../components/EventBox'
import { useCurrentUser } from '../../contexts/CurrentUser'
import { Button } from '../../components/Button'

import { Container } from './styles'
import { useHistory, useParams } from 'react-router-dom'
import { EventsFilter } from '../../containers/EventsFilter'
import { EventsFilterType } from '../../types/listOfRoutes'
import { attendEvent, getAllEvents, unattendEvent } from '../../services/events'
import { CircleButton } from '../../components/CircleButton'
import PageLayout from '../../containers/PageLayout'
import CreateEventModal from '../../containers/CreateEventModal'
import { EventBoxList } from '../../components/EventBoxList'
import { defineButton } from '../../helpers/defineButton'
import CircleButtonLayout from '../../containers/CircleButtonLayout'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { breakPoints } from '../../styles/themes'
import { Loader } from '../../components/Loader'

type FilterType = keyof typeof EventsFilterType

interface Params {
  filter: FilterType
}
const EventsPage = () => {
  const ref = useRef<RefObject<HTMLDivElement>>()
  const isBreakPoint = useMediaQuery(768)
  const { filter } = useParams<Params>()
  const [isModal, setIsModal] = useState(false)
  const [reset, setReset] = useState(false)
  const [event, setEvents] = useState<[]>()
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingPage, setIsLoadingPage] = useState(false)
  const { userData, viewMode } = useCurrentUser()
  const user = localStorage.getItem('user')
  const los = JSON.parse(user ? user : ' ')

  console.log(isBreakPoint, 'point')
  const onReset = () => {
    setReset(!reset)
  }

  useEffect(() => {
    setIsLoading(true)
    setIsLoadingPage(true)

    switch (filter) {
      case 'all':
        allEvents()
        break

      case 'past':
        fetchPastEvents()
        break

      case 'future':
        fetchFutureEvents()
        break

      default: {
        allEvents()
      }
    }
  }, [filter, reset])

  const allEvents = async () => {
    const { data, status } = await getAllEvents()
    const events = data

    if (status === 200) {
      setIsLoading(false)
      setIsLoadingPage(false)
    }
    setEvents(data)
  }

  const fetchFutureEvents = async () => {
    const { data, status } = await getAllEvents()
    const futureEvents = data.filter(
      (item: any) => new Date(item.startsAt) > new Date(),
    )
    if (status === 200) {
      setIsLoading(false)
      setIsLoadingPage(false)
    }
    setEvents(futureEvents)
  }

  const fetchPastEvents = async () => {
    const { data, status } = await getAllEvents()
    const futureEvents = data.filter(
      (item: any) => new Date(item.startsAt) < new Date(),
    )

    if (status === 200) {
      setIsLoading(false)
      setIsLoadingPage(false)
    }

    setEvents(futureEvents)
  }

  useEffect(() => {
    console.log(isLoading, 'isLoading')
  }, [isLoading])

  const pushToDetail = (event: any, id: any) => {
    history.push(`/events/${id}/detail`)
  }
  return (
    <>
      {isModal && (
        <CreateEventModal
          onClose={() => setIsModal(false)}
          onReset={() => setReset(!reset)}
        />
      )}
      {!isModal && (
        <PageLayout>
          <EventsFilter filterType={filter} />
          <Container mode={viewMode}>
            {!isLoadingPage &&
              event?.map((item: any) =>
                viewMode === 'list' ? (
                  <EventBoxList
                    key={item._id}
                    onClick={() => history.push(`/events/${item._id}/detail`)}
                  >
                    <EventBoxList.Name>{item.title}</EventBoxList.Name>
                    <EventBoxList.Description>
                      {item.description}
                    </EventBoxList.Description>
                    {isBreakPoint && (
                      <EventBoxList.Owner>
                        {item.owner.firstName} {item.owner.lastName}
                      </EventBoxList.Owner>
                    )}
                    <EventBoxList.Date date={item.startsAt} />
                    <EventBoxList.Capacity
                      attendees={item.attendees.length}
                      capacity={item.capacity}
                    />
                    {defineButton(
                      los,
                      item,
                      history,
                      onReset,
                      isLoading,
                      setIsLoading,
                    )}
                  </EventBoxList>
                ) : (
                  <EventBox
                    key={item._id}
                    onClick={() => history.push(`/events/${item._id}/detail`)}
                  >
                    <EventBox.Date date={item.startsAt} />
                    <EventBox.Name>{item.title}</EventBox.Name>
                    <EventBox.Owner>
                      {item.owner.firstName} {item.owner.lastName}
                    </EventBox.Owner>
                    <EventBox.Description>
                      {item.description}
                    </EventBox.Description>
                    <EventBox.Capacity
                      attendees={item.attendees.length}
                      capacity={item.capacity}
                    >
                      {defineButton(
                        los,
                        item,
                        history,
                        onReset,
                        isLoading,
                        setIsLoading,
                      )}
                    </EventBox.Capacity>
                  </EventBox>
                ),
              )}
          </Container>
        </PageLayout>
      )}
      {!isModal && (
        <CircleButtonLayout>
          <CircleButton theme="default" onClick={() => setIsModal(true)} />
        </CircleButtonLayout>
      )}
      {isLoadingPage && <Loader top="50%" right="50%" size="onPage" />}
    </>
  )
}

export { EventsPage }

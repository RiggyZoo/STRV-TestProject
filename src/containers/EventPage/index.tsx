import React, { RefObject, useEffect, useRef, useState } from 'react'
import { AxiosResponse } from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { EventBox } from '../../components/EventBox'
import { useCurrentUser } from '../../contexts/CurrentUser'
import { EventsFilter } from '../../containers/EventsFilter'
import { EventsFilterType } from '../../types/listOfRoutes'
import { CircleButton } from '../../components/CircleButton'
import PageLayout from '../../containers/PageLayout'
import CreateEventModal from '../../containers/CreateEventModal'
import { EventBoxList } from '../../components/EventBoxList'
import { defineButton } from '../../helpers/defineButton'
import CircleButtonLayout from '../../helpers/CircleButtonLayout'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { Loader } from '../../components/Loader'
import api from '../../api'
import { Container } from './styles'

type FilterType = keyof typeof EventsFilterType

interface Params {
  filter: FilterType
}
const EventsPage = () => {
  const isBreakPoint = useMediaQuery(768)
  const { filter } = useParams<Params>()
  const [isModal, setIsModal] = useState(false)
  const [reset, setReset] = useState(false)
  const [event, setEvents] = useState<[]>()
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingPage, setIsLoadingPage] = useState(false)
  const { userData, viewMode } = useCurrentUser()

  const onReset = () => {
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
    try {
      await api.getAllEvents().then((result: AxiosResponse) => {
        if (result.status === 200) {
          setIsLoading(false)
          setIsLoadingPage(false)
          setEvents(result.data)
        }
      })
    } catch (e: any) {
      if (e.response?.status === 500) {
        history.push('/404')
      }
    }
  }

  const fetchFutureEvents = async () => {
    try {
      await api.getAllEvents().then((result: AxiosResponse) => {
        if (result.status === 200) {
          const futureEvents = result.data.filter(
            (item: any) => new Date(item.startsAt) > new Date(),
          )
          setIsLoading(false)
          setIsLoadingPage(false)
          setEvents(futureEvents)
        }
      })
    } catch (e: any) {
      if (e.response?.status === 500) {
        history.push('/404')
      }
    }
  }

  const fetchPastEvents = async () => {
    try {
      await api.getAllEvents().then((result: AxiosResponse) => {
        if (result.status === 200) {
          const pastEvents = result.data.filter(
            (item: any) => new Date(item.startsAt) < new Date(),
          )
          setIsLoading(false)
          setIsLoadingPage(false)
          setEvents(pastEvents)
        }
      })
    } catch (e: any) {
      if (e.response?.status === 500) {
        history.push('/404')
      }
    }
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
                    onClick={() => history.push(`/events/${item._id}/detail`)}
                    isBreakPoint={isBreakPoint}
                    name={item.title}
                    date={item.startsAt}
                    description={item.description}
                    owner={`${item.owner.firstName} ${item.owner.lastName}`}
                    attendees={item.attendees.length}
                    capacity={item.capacity}
                  >
                    {defineButton(
                      userData,
                      item,
                      history,
                      onReset,
                      isLoading,
                      setIsLoading,
                    )}
                  </EventBoxList>
                ) : (
                  <EventBox
                    isDetail={false}
                    isBreakPoint={isBreakPoint}
                    key={item._id}
                    onClick={() => history.push(`/events/${item._id}/detail`)}
                    date={item.startsAt}
                    description={item.description}
                    name={item.title}
                    owner={`${item.owner.firstName} ${item.owner.lastName}`}
                    attendees={item.attendees.length}
                    capacity={item.capacity}
                  >
                    {defineButton(
                      userData,
                      item,
                      history,
                      onReset,
                      isLoading,
                      setIsLoading,
                    )}
                  </EventBox>
                ),
              )}
          </Container>
          {!isModal && (
            <CircleButtonLayout>
              <CircleButton theme="default" onClick={() => setIsModal(true)} />
            </CircleButtonLayout>
          )}
        </PageLayout>
      )}

      {isLoadingPage && <Loader top="50%" right="50%" size="onPage" />}
    </>
  )
}

export { EventsPage }

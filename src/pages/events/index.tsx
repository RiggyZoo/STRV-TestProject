import React, { RefObject, useEffect, useRef, useState } from 'react'
import { EventBox } from '../../components/EventBox'
import { useCurrentUser } from '../../contexts/CurrentUser'
import { Button } from '../../components/Button'
import { Buttons, ButtonSize } from '../../components/Button/Button'
import { Container } from './styles'
import { useParams } from 'react-router-dom'
import { EventsFilter } from '../../containers/EventsFilter'
import { EventsFilterType } from '../../types/listOfRoutes'
import { attendEvent, getAllEvents, unattendEvent } from '../../services/events'
import { CircleButton } from '../../components/CircleButton'
import { CircleButtons } from '../../components/CircleButton/CircleButton'
import StickyButtonContainer from '../../containers/StickyButtonContainer'
import PageLayout from '../../containers/PageLayout'
import CreateEventModal from '../../containers/CreateEventModal'

type FilterType = keyof typeof EventsFilterType

interface Params {
  filter: FilterType
}
const EventsPage = () => {
  const ref = useRef<RefObject<HTMLDivElement>>()
  const { filter } = useParams<Params>()
  const [isModal, setIsModal] = useState(false)
  const [reset, setReset] = useState(false)
  const [event, setEvents] = useState<[]>()
  const { userData } = useCurrentUser()
  const user = localStorage.getItem('user')
  const los = JSON.parse(user ? user : ' ')

  useEffect(() => {
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
    const { data } = await getAllEvents()
    const events = data

    setEvents(data)
  }

  const fetchFutureEvents = async () => {
    const { data } = await getAllEvents()
    const futureEvents = data.filter(
      (item: any) => new Date(item.startsAt) > new Date(),
    )
    setEvents(futureEvents)
  }

  const fetchPastEvents = async () => {
    const { data } = await getAllEvents()
    const futureEvents = data.filter(
      (item: any) => new Date(item.startsAt) < new Date(),
    )
    setEvents(futureEvents)
  }

  const attendToEvent = async (id: string) => {
    const { status } = await attendEvent(id)
    setReset(!reset)
  }

  //TODO: look into deletion method
  const unattendToEvent = async (id: string) => {
    const q = await unattendEvent(id)
    setReset(!reset)
  }

  const defineButton = (event: any) => {
    const isAttended = event.attendees.filter(
      (item: any) => item?._id === los._id,
    ).length
    const isMyEvent = event.owner._id === los._id
    const isPast = new Date(event.startsAt) < new Date()
    if (isMyEvent) {
      return isPast ? null : (
        <Button theme={Buttons.grey} size={ButtonSize.small} loading={false}>
          edit
        </Button>
      )
    }
    if (!!isAttended) {
      return isPast ? null : (
        <Button
          theme={Buttons.red}
          size={ButtonSize.small}
          loading={false}
          onClick={() => unattendToEvent(event._id)}
        >
          Leave
        </Button>
      )
    } else {
      return isPast ? null : (
        <Button
          theme={Buttons.default}
          size={ButtonSize.small}
          loading={false}
          onClick={() => attendToEvent(event._id)}
        >
          join
        </Button>
      )
    }
  }

  return (
    <>
      {isModal && <CreateEventModal onClose={() => setIsModal(false)} />}
      {!isModal && (
        <PageLayout>
          <EventsFilter filterType={filter} />
          <Container>
            {event &&
              event.map((item: any) => (
                <EventBox key={item._id}>
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
                    {defineButton(item)}
                  </EventBox.Capacity>
                </EventBox>
              ))}
          </Container>
        </PageLayout>
      )}
      <StickyButtonContainer>
        <CircleButton
          theme={CircleButtons.default}
          onClick={() => setIsModal(true)}
        />
      </StickyButtonContainer>
    </>
  )
}

export { EventsPage }

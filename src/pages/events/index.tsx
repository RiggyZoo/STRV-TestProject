import React, { useEffect, useState } from 'react'
import { EventBox } from '../../components/EventBox'
import { connector } from '../../connector/connector'
import { useCurrentUser } from '../../contexts/CurrentUser'
import { Button } from '../../components/Button'
import { Buttons, ButtonSize } from '../../components/Button/Button'
import { Container } from './styles'
import { useParams } from 'react-router-dom'
import { EventsFilter } from '../../containers/EventsFilter'
import { EventsFilterType } from '../../types/listOfRoutes'
import { getAllEvents } from '../../services/events'

type FilterType = keyof typeof EventsFilterType

interface Params {
  filter: FilterType
}
const EventsPage = () => {
  const { filter } = useParams<Params>()
  const [event, setEvents] = useState<[]>()
  const { userData } = useCurrentUser()
  const user = localStorage.getItem('user')
  const los = JSON.parse(user ? user : ' ')

  useEffect(() => {
    switch (filter) {
      case 'all':
        {
          allEvents()
        }
        break
      case 'past':
        {
          fetchPastEvents()
        }
        break
      case 'future':
        {
          fetchFutureEvents()
        }
        break
      default: {
        allEvents()
      }
    }
  }, [filter])

  const allEvents = async () => {
    const { data } = await getAllEvents()
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

  return (
    <>
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
              <EventBox.Description>{item.description}</EventBox.Description>
              <EventBox.Capacity
                attendees={item.attendees.length}
                capacity={item.capacity}
              >
                <Button
                  theme={
                    item.owner._id === los._id ? Buttons.red : Buttons.grey
                  }
                  size={ButtonSize.small}
                  loading={false}
                >
                  Edit
                </Button>
              </EventBox.Capacity>
            </EventBox>
          ))}
      </Container>
    </>
  )
}

export { EventsPage }

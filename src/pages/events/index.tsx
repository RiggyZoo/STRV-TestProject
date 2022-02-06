import React, { useEffect, useState } from 'react'
import { EventBox } from '../../components/EventBox'
import { connector } from '../../connector/connector'
import { useCurrentUser } from '../../contexts/CurrentUser'
import { Button } from '../../components/Button'
import { Buttons, ButtonSize } from '../../components/Button/Button'
import { Container } from './styles'

const EventsPage = () => {
  const [event, setEvents] = useState<[]>()
  const { userData } = useCurrentUser()
  const user = localStorage.getItem('user')
  const los = JSON.parse(user ? user : ' ')
  console.log(los)

  console.log(userData)

  useEffect(() => {
    const fetchData = async () => {
      const { data, status } = await connector.get('events')
      if (data) {
        setEvents(data)
        console.log(data)
      }
    }

    fetchData()
  }, [])

  return (
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
                theme={item.owner._id === los._id ? Buttons.red : Buttons.grey}
                size={ButtonSize.small}
                loading={false}
              >
                Edit
              </Button>
            </EventBox.Capacity>
          </EventBox>
        ))}
    </Container>
  )
}

export { EventsPage }

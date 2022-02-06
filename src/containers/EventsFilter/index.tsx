import React, { FC } from 'react'
import { Container } from './styles'
import { LinkButton } from '../../components/LinkButton'
import { Link, useHistory, useParams } from 'react-router-dom'

interface EventsFilterProps {
  filterType: string
}
const EventsFilter: FC<EventsFilterProps> = ({ filterType }) => {
  const params = useParams()
  const history = useHistory()

  return (
    <Container>
      <LinkButton
        isActive={filterType === 'all'}
        onClick={() => history.push('/events/all')}
      >
        All events
      </LinkButton>
      <LinkButton
        isActive={filterType === 'future'}
        onClick={() => history.push('/events/future')}
      >
        Future events
      </LinkButton>
      <LinkButton
        isActive={filterType === 'past'}
        onClick={() => history.push('/events/past')}
      >
        Past events
      </LinkButton>
    </Container>
  )
}

export { EventsFilter }

import React, { FC } from 'react'
import { Container, FilterContainer, ViewContainer } from './styles'
import { LinkButton } from '../../components/LinkButton'
import { useHistory, useParams } from 'react-router-dom'
import { ChangeViewIcon } from '../../components/ChangeViewIcon'
import { useCurrentUser } from '../../contexts/CurrentUser'

interface EventsFilterProps {
  filterType: string
}
const EventsFilter: FC<EventsFilterProps> = ({ filterType }) => {
  const params = useParams()
  const history = useHistory()
  const { viewMode, setViewMode } = useCurrentUser()

  const setViewModeGrid = () => {
    setViewMode('grid')
    localStorage.setItem('mode', 'grid')
  }
  const setViewModeList = () => {
    setViewMode('list')
    localStorage.setItem('mode', 'list')
  }

  const setPage = (event: string) => {
    localStorage.setItem('events', event)
    history.push(`/events/${event}`)
  }
  return (
    <Container>
      <FilterContainer>
        <LinkButton
          isActive={filterType === 'all'}
          onClick={() => setPage('all')}
        >
          All events
        </LinkButton>
        <LinkButton
          isActive={filterType === 'future'}
          onClick={() => setPage('future')}
        >
          Future events
        </LinkButton>
        <LinkButton
          isActive={filterType === 'past'}
          onClick={() => setPage('past')}
        >
          Past events
        </LinkButton>
      </FilterContainer>
      <ViewContainer>
        <ChangeViewIcon
          isActive={viewMode === 'list'}
          mode="list"
          onClick={setViewModeList}
        />
        <ChangeViewIcon
          isActive={viewMode === 'grid'}
          mode="grid"
          onClick={setViewModeGrid}
        />
      </ViewContainer>
    </Container>
  )
}

export { EventsFilter }

import React, { FC } from 'react'
import { Container, FilterContainer, ViewContainer } from './styles'
import { LinkButton } from '../../components/LinkButton'
import { useHistory, useParams } from 'react-router-dom'
import { CircleButton } from '../../components/CircleButton'
import { CircleButtons } from '../../components/CircleButton/CircleButton'
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
  return (
    <Container>
      <FilterContainer>
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

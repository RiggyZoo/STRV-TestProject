import React, { ChangeEvent, FC } from 'react'
import { Container, FilterContainer, ViewContainer } from './styles'
import { LinkButton } from '../../components/LinkButton'
import { useHistory, useParams } from 'react-router-dom'
import { ChangeViewIcon } from '../../components/ChangeViewIcon'
import { useCurrentUser } from '../../contexts/CurrentUser'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { Dropdown } from '../../components/Dropdown'
import { DropdownFilter } from '../../components/DropdownFilter'

interface EventsFilterProps {
  filterType: string
}
interface Params {
  filter: string
}
const EventsFilter: FC<EventsFilterProps> = ({ filterType }) => {
  const { filter } = useParams<Params>()
  const history = useHistory()
  const isBreakPoint = useMediaQuery(768)
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
  const setPageMobile = (e: ChangeEvent<HTMLSelectElement>) => {
    setPage(e.target.value)
  }
  return (
    <Container>
      {isBreakPoint ? (
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
      ) : (
        <DropdownFilter onChange={(e) => setPageMobile(e)} value={filter}>
          <DropdownFilter.Item
            value="all"
            onChange={() => alert('11')}
            onClick={() => alert('11')}
          >
            all
          </DropdownFilter.Item>
          <DropdownFilter.Item value="future" onClick={() => setPage('future')}>
            Future
          </DropdownFilter.Item>
          <DropdownFilter.Item value="past" onClick={() => setPage('past')}>
            Past
          </DropdownFilter.Item>
        </DropdownFilter>
        /*<Dropdown isFilter={true}>
          <Dropdown.DropdownItem onClick={() => setPage('all')}>
            All
          </Dropdown.DropdownItem>
        </Dropdown>*/
      )}
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

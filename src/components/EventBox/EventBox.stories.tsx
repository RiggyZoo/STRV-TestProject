import React from 'react'
import { EventBox } from './EventBox'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export default {
  title: 'Components/EventBox',
  component: EventBox,
  argTypes: {},
}

export const Default = () => {
  const isBreakPoint = useMediaQuery(768)
  return (
    <EventBox
      name={'Name'}
      attendees={1}
      owner={'Owner'}
      capacity={10}
      date={'2022-03-01T21:22:14.277Z'}
      description={'description'}
      isBreakPoint={isBreakPoint}
    >
      children
    </EventBox>
  )
}

Default.args = {}

import React from 'react'
import { Story } from '@storybook/react'
import { EventBoxList } from './EventBoxList'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export default {
  title: 'Components/EventBoxList',
  component: EventBoxList,
  argTypes: {},
}

export const Default = () => {
  const isBreakPoint = useMediaQuery(768)
  return (
    <EventBoxList
      name={'Name'}
      attendees={1}
      owner={'Owner'}
      capacity={10}
      date={'2022-03-01T21:22:14.277Z'}
      description={'description'}
      isBreakPoint={isBreakPoint}
    >
      children
    </EventBoxList>
  )
}

Default.args = {}

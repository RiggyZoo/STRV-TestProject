import React from 'react'
import { Story } from '@storybook/react'
import { EventBoxList } from './EventBoxList'

export default {
  title: 'Components/EventBox',
  component: EventBoxList,
  argTypes: {},
}

export const Default = () => {
  return (
    <EventBoxList>
      <EventBoxList.Date date="2022-03-01T21:22:14.277Z" />
      <EventBoxList.Name>Even name</EventBoxList.Name>
      <EventBoxList.Owner>Event Owner</EventBoxList.Owner>
      <EventBoxList.Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum esse
        facilis fuga inventore placeat quae quis quo. Doloremque, mollitia,
        repellendus?
      </EventBoxList.Description>
      <EventBoxList.Capacity attendees={12} capacity={100} />
    </EventBoxList>
  )
}

Default.args = {}

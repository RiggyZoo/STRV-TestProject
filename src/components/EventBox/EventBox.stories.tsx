import React from 'react'
import { EventBox } from './EventBox'

export default {
  title: 'Components/EventBox',
  component: EventBox,
  argTypes: {},
}

export const Default = () => {
  return (
    <EventBox>
      <EventBox.Date date="2022-03-01T21:22:14.277Z" />
      <EventBox.Name>Even name</EventBox.Name>
      <EventBox.Owner>Event Owner</EventBox.Owner>
      <EventBox.Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum esse
        facilis fuga inventore placeat quae quis quo. Doloremque, mollitia,
        repellendus?
      </EventBox.Description>
      <EventBox.Capacity attendees={12} capacity={100} />
    </EventBox>
  )
}

Default.args = {}

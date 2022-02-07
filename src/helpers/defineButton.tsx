import { Button } from '../components/Button'
import { Buttons, ButtonSize } from '../components/Button/Button'
import React from 'react'
import { unattendEvent, attendEvent } from '../services/events'

export const defineButton = (
  user: any,
  event: any,
  history: any,
  onReset: any,
) => {
  const attendToEvent = async (event: any, id: string) => {
    event.stopPropagation()
    const { status } = await attendEvent(id)
    onReset()
  }

  //TODO: look into deletion method
  const unattendToEvent = async (event: any, id: string) => {
    event.stopPropagation()
    const responce = await unattendEvent(id)
    onReset()
  }
  const isAttended = event.attendees.filter(
    (item: any) => item?._id === user._id,
  ).length
  const isMyEvent = event.owner._id === user._id
  const isPast = new Date(event.startsAt) < new Date()
  if (isMyEvent) {
    return isPast ? null : (
      <Button
        theme={Buttons.grey}
        size={ButtonSize.small}
        loading={false}
        onClick={() => history.push(`${event._id}/detail`)}
        style={{ justifySelf: 'end' }}
      >
        edit
      </Button>
    )
  }
  if (!!isAttended) {
    return isPast ? null : (
      <Button
        theme={Buttons.red}
        size={ButtonSize.small}
        loading={false}
        style={{ justifySelf: 'end' }}
        onClick={(click) => unattendToEvent(click, event._id)}
      >
        Leave
      </Button>
    )
  } else {
    return isPast ? null : (
      <Button
        theme={Buttons.default}
        size={ButtonSize.small}
        loading={false}
        style={{ justifySelf: 'end' }}
        onClick={(click) => attendToEvent(click, event._id)}
      >
        join
      </Button>
    )
  }
}

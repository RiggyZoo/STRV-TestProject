import React from 'react'
import { Button } from '../components/Button'
import { unattendEvent, attendEvent } from '../services/events'

export const defineButton = (
  user: any,
  event: any,
  history: any,
  onReset: any,
  loading: any,
  setLoading?: any,
) => {
  const attendToEvent = async (event: any, id: string) => {
    setLoading(id)
    event.stopPropagation()
    const { status } = await attendEvent(id)
    onReset()
  }

  //TODO: look into deletion method
  const unattendToEvent = async (event: any, id: string) => {
    setLoading(id)
    event.stopPropagation()
    const responce = await unattendEvent(id)
    onReset()
  }

  const pushToEditEvent = (event: any, id: any) => {
    event.stopPropagation()
    history.push(`${id}/detail`)
  }

  const isAttended = event.attendees.filter(
    (item: any) => item?._id === user._id,
  ).length
  const isMyEvent = event.owner._id === user._id
  const isPast = new Date(event.startsAt) < new Date()
  if (isMyEvent) {
    return isPast ? null : (
      <Button
        theme={'grey'}
        size="small"
        id={event.id}
        key={event.id}
        loading={false}
        onClick={(click) => pushToEditEvent(click, event._id)}
        style={{ justifySelf: 'end' }}
      >
        edit
      </Button>
    )
  }

  if (!!isAttended) {
    return isPast ? null : (
      <Button
        theme="red"
        size="small"
        loading={event._id === loading}
        style={{ justifySelf: 'end' }}
        onClick={(click) => unattendToEvent(click, event._id)}
      >
        Leave
      </Button>
    )
  } else {
    return isPast ? null : (
      <Button
        theme="green"
        size="small"
        loading={event._id === loading}
        style={{ justifySelf: 'end' }}
        onClick={(click) => attendToEvent(click, event._id)}
      >
        join
      </Button>
    )
  }
}

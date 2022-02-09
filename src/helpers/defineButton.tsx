import React from 'react'
import { Button } from '../components/Button'
import api from '../api'
import { AxiosResponse } from 'axios'

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
    try {
      await api.attendAnEvent(id).then((result: AxiosResponse) => {
        if (result.status === 200) {
          onReset()
        }
      })
    } catch (e: any) {
      history.push('/404')
    }
  }

  //TODO: look into deletion method
  const unattendToEvent = async (event: any, id: string) => {
    setLoading(id)
    event.stopPropagation()
    try {
      await api.unattendAnEvent(id).then((result: AxiosResponse) => {
        if (result.status === 200) {
          onReset()
        }
      })
    } catch (e: any) {
      history.push('/404')
    }
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

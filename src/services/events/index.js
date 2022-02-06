import { connector } from '../../connector/connector'

export const getAllEvents = async () => {
  return await connector.get('events')
}

export const getOneEvent = async (id) => {
  return await connector.get(`events/${id}`)
}

export const createEvent = async (payload) => {
  return await connector.post('events', payload)
}

export const updateEvent = async (payload, id) => {
  return await connector.patch(`events/${id}`, payload)
}

export const deleteEvent = async (id) => {
  return await connector.delete(`events/${id}`)
}

export const attendEvent = async (id) => {
  return await connector.post(`events/${id}/attendees/me`, null)
}

export const unattendEvent = async (id) => {
  return await connector.delete(`events/${id}/attendees/me`, null)
}

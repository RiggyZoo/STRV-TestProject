export interface Events {
  id: string
  capacity: number
  startsAt: string
  description: string
  title: string
  owner: Owner
  attendees: Owner[]
}

export interface Owner {
  email: string
  firstName: string
  id: string
  lastName: string
  __v: number
  _id: string
}

export interface EventFormFormik {
  title: string
  description: string
  startsAt: string
  time: string
  capacity: number
}

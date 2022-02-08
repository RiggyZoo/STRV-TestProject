import React, { FC } from 'react'
import { Container } from './styles'
import Name from './Name'
import Owner from './Owner'
import Description from './Description'
import Date from './Date'
import Capacity from './Capacity'

export interface IEventBoxProps {
  children: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
}
export const EventBox = ({ children, style, onClick }: IEventBoxProps) => {
  return (
    <Container onClick={onClick} style={style}>
      {children}
    </Container>
  )
}

EventBox.Date = Date
EventBox.Name = Name
EventBox.Description = Description
EventBox.Owner = Owner
EventBox.Capacity = Capacity

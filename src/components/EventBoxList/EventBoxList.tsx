import React from 'react'
import { Container } from './styles'
import Name from './Name'
import Owner from './Owner'
import Description from './Description'
import Date from './Date'
import Capacity from './Capacity'

export interface IEventBoxProps {
  children: React.ReactNode
}
export const EventBoxList = ({ children }: IEventBoxProps) => {
  return <Container>{children}</Container>
}

EventBoxList.Date = Date
EventBoxList.Name = Name
EventBoxList.Description = Description
EventBoxList.Owner = Owner
EventBoxList.Capacity = Capacity

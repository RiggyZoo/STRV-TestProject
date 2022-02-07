import React from 'react'
import { Container } from './styles'
import Name from './Name'
import Owner from './Owner'
import Description from './Description'
import Date from './Date'
import Capacity from './Capacity'

export interface IEventBoxProps {
  children: React.ReactNode
  onClick?: (event: any) => void
}
export const EventBoxList = ({ children, onClick }: IEventBoxProps) => {
  return <Container onClick={onClick}>{children}</Container>
}

EventBoxList.Date = Date
EventBoxList.Name = Name
EventBoxList.Description = Description
EventBoxList.Owner = Owner
EventBoxList.Capacity = Capacity

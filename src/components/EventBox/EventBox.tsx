import React, { FC } from 'react'
import { Container } from './styles'
import Name from './Name'
import Owner from './Owner'
import Description from './Description'
import Date from './Date'
import Capacity from './Capacity'
import { Button } from '../Button'
import { Buttons, ButtonSize } from '../Button/Button'

export interface IEventBoxProps {
  children: React.ReactNode
}
export const EventBox = ({ children }: IEventBoxProps) => {
  return <Container>{children}</Container>
}

EventBox.Date = Date
EventBox.Name = Name
EventBox.Description = Description
EventBox.Owner = Owner
EventBox.Capacity = Capacity

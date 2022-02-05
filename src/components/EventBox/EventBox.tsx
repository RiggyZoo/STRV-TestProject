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
  return (
    <Container>
      <Date date="2022-03-01T21:22:14.277Z" />
      <Name>Nikita</Name>
      <Owner>Filias</Owner>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, nemo!
      </Description>
      <Capacity attendees={3} capacity={10}>
        <Button theme={Buttons.red} size={ButtonSize.small} loading={false}>
          Leave
        </Button>
      </Capacity>
    </Container>
  )
}

EventBox.Date = Date
EventBox.Name = Name
EventBox.Description = Description
EventBox.Owner = Owner
EventBox.Capacity = Capacity

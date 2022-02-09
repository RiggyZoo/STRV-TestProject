import React from 'react'
import {
  ButtonWrapper,
  Container,
  ContainerMobile,
  MobileViewText,
} from './styles'
import Name from './Name'
import Owner from './Owner'
import Description from './Description'
import Date from './Date'
import Capacity from './Capacity'

export interface IEventBoxProps {
  children: React.ReactNode
  onClick?: (event: any) => void
  isBreakPoint?: boolean
  date?: string
  name?: string
  description?: string
  owner?: string
  capacity?: number
  attendees?: number
}
export const EventBoxList = ({
  children,
  onClick,
  date,
  description,
  name,
  isBreakPoint,
  owner,
  attendees,
  capacity,
}: IEventBoxProps) => {
  return (
    <>
      {isBreakPoint ? (
        <Container onClick={onClick}>
          <Name>{name}</Name>
          <Description>{description}</Description>
          <Owner>{owner}</Owner>
          <Date date={date} />
          <Capacity attendees={attendees} capacity={capacity} />
          {children}
        </Container>
      ) : (
        <ContainerMobile onClick={onClick}>
          <Name>{name}</Name>
          <Description>{description}</Description>
          {isBreakPoint && <Owner>{owner}</Owner>}
          <MobileViewText>
            <div>
              <Date date={date} />
              <Capacity attendees={attendees} capacity={capacity} />
            </div>
            <ButtonWrapper>{children}</ButtonWrapper>
          </MobileViewText>
        </ContainerMobile>
      )}
    </>
  )
}

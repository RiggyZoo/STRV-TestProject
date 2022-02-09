import React, { FC } from 'react'
import { Container, ContentWithButton } from './styles'
import Name from './Name'
import Owner from './Owner'
import Description from './Description'
import Date from './Date'
import Capacity from './Capacity'

export interface IEventBoxProps {
  children: React.ReactNode
  style?: React.CSSProperties
  onClick?: (event: any) => void
  isBreakPoint?: boolean
  date?: string
  name?: string
  description?: string
  owner?: string
  capacity?: number
  attendees?: number
}
export const EventBox = ({
  children,
  onClick,
  style,
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
        <Container onClick={onClick} style={style}>
          <Date date={date} />
          <Name>{name}</Name>
          <Owner>{owner}</Owner>
          <Description>{description}</Description>
          <ContentWithButton>
            {' '}
            <Capacity attendees={attendees} capacity={capacity} />
            {children}
          </ContentWithButton>
        </Container>
      ) : (
        <Container onClick={onClick} style={style}>
          <Date date={date} />
          <Name>{name}</Name>
          <Owner>{owner}</Owner>
          <Description>{description}</Description>
          <ContentWithButton>
            <Capacity attendees={attendees} capacity={capacity} />
            {children}
          </ContentWithButton>
        </Container>
      )}
    </>
  )
}

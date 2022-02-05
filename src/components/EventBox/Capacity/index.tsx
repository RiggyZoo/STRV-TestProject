import React, { FC } from 'react'
import { Container, CapacityContainer } from './styles'
import UserIcon from './icon-user.svg'

interface ICapacityProps {
  attendees: number
  capacity: number
}
const Capacity: FC<ICapacityProps> = ({ children, attendees, capacity }) => {
  return (
    <Container>
      <CapacityContainer>
        <img src={UserIcon} alt="" />
        <span>{`${attendees} of ${capacity}`}</span>
      </CapacityContainer>

      {children}
    </Container>
  )
}

export default Capacity

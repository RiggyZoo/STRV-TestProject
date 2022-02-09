import React, { FC } from 'react'
import UserIcon from '../../../assets/icons/icon-user.svg'
import { Container, CapacityContainer } from './styles'

interface ICapacityProps {
  attendees?: number
  capacity?: number
}
const Capacity: FC<ICapacityProps> = ({ children, attendees, capacity }) => {
  return (
    <Container>
      <CapacityContainer>
        <img src={UserIcon} alt="icon" />
        <span>{`${attendees} of ${capacity}`}</span>
      </CapacityContainer>

      {children}
    </Container>
  )
}

export default Capacity

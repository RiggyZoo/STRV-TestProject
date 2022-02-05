import React, { FC } from 'react'
import { Container } from './styles'
import { formatDate } from '../../../helpers/date'

interface IDateProps {
  date: string
}
const Date: FC<IDateProps> = ({ date }) => {
  return <Container>{formatDate(date)}</Container>
}

export default Date

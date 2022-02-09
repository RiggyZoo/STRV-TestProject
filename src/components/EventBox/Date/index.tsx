import React, { FC } from 'react'
import { formatDate } from '../../../helpers/date'
import { Container } from './styles'

interface IDateProps {
  date?: string
}
const Date: FC<IDateProps> = ({ date }) => {
  return <Container>{formatDate(date)}</Container>
}

export default Date

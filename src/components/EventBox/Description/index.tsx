import React, { FC } from 'react'
import { Container, ContainerMobile } from './styles'

const Description: FC<{ isDetail?: boolean; isBreakPoint?: boolean }> = ({
  children,
  isBreakPoint,
  isDetail,
}) => {
  return (
    <>
      {isBreakPoint ? (
        <Container isDetail={isDetail}>{children}</Container>
      ) : (
        <ContainerMobile isDetail={isDetail}>{children}</ContainerMobile>
      )}
    </>
  )
}

export default Description

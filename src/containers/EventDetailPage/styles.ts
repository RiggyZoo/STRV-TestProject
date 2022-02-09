import styled, { css } from 'styled-components'
import { breakPoints, colors } from '../../styles/themes'
import Cursor from '../../assets/icons/Pointer.png'

export const EventDetailTitle = styled.div`
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1px;
  font-family: Hind-Regular, sans-serif;
  margin-bottom: 41px;
  color: ${colors.linkButtonNonActive};
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: ${breakPoints.small}) {
    flex-direction: row;
  }
`
export const EventDetailWrapper = styled.div`
  flex: 3;
`

export const Attendees = styled.div`
  padding: 1.625rem 2rem;
  background-color: ${colors.white};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  max-height: 18.5rem;
  flex: 1;
`

export const AttendTitle = styled.span`
  font-size: 22px;
  line-height: 32px;
`
export const AttendItem = styled.div<{ isMyEvent?: boolean }>`
  font-size: 13px;
  color: ${colors.greySecondary};
  background-color: ${({ isMyEvent }) =>
    isMyEvent ? colors.white : colors.grey};
  padding: 0 1rem;
  line-height: 31px;
  border-radius: 100px;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  ${({ isMyEvent }) =>
    isMyEvent &&
    css`
      border: 2px solid ${colors.grey};
    `}
`
export const AttendItemWrapper = styled.div`
  display: flex;
  overflow: scroll;
  flex-flow: row wrap;
  justify-content: flex-start;
`
export const EventFormContainer = styled.div`
  flex: 3;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  padding: 2rem;
  background-color: ${colors.white};
`

export const DeleteButton = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  font-family: Hind-Regular, sans-serif;
  color: ${colors.secondary};
  transition: all 0.2s;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: url(${Cursor}), pointer;
  &:hover {
    color: ${colors.secondaryHover};
    text-decoration: underline;
  }
`

export const SvgElement = styled.img`
  margin-right: 12px;
`
export const ContentHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`

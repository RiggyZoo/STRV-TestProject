import styled from 'styled-components'
import RightImage from '../../assets/img/Image.png'
import { colors } from '../../styles/themes'

interface IsBreakpointProp {
  isBreakPoint: boolean
}
export const Container = styled.div<IsBreakpointProp>`
  position: relative;
  display: ${({ isBreakPoint }) => (!isBreakPoint ? 'block' : 'flex')};
  flex-direction: row;
  min-height: ${({ isBreakPoint }) => isBreakPoint && '100%'};
`

export const TopPart = styled.div`
  width: 100%;
  padding: 0 3rem;
  display: flex;
  position: absolute;
  justify-content: space-between;
`
export const RightContent = styled.div`
  background-image: url(${RightImage});
  background-position: center center;
  background-size: cover;
  flex-basis: 20%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 6%;
  flex-direction: column;
  @media (min-width: 1600px) {
    flex-basis: 20%;
  }
`

export const Title = styled.div`
  font-family: PlayfairDisplay-Regular, sans-serif;
  color: #ffffff;
  font-size: 2rem;
  line-height: 1.15;
  text-align: center;
  & > span {
    font-family: Hind-Regular, sans-serif;
    font-size: 1.125rem;
    line-height: 1.5rem;
    color: #949ea8;
  }
`
export const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-basis: 80%;

  justify-content: center;
  align-items: center;
  @media (max-width: 415px) {
    margin: 0 1.5rem;
  }
`
export const Line = styled.div`
  &:after {
    content: '';
    display: block;
    margin: 0 auto;
    width: 12px;
    padding-top: 21px;
    border-bottom: 2px solid ${colors.green};
  }
`

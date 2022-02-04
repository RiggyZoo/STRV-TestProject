import styled from 'styled-components'
import RightImage from '../../assets/img/Image.png'
import { colors } from '../../styles/themes'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  z-index: 10;
`

export const TopPart = styled.div`
  margin: 0 2rem;
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

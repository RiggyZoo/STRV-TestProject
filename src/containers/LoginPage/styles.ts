import RightImage from '../../assets/img/Image.png'
import { breakPoints, colors } from '../../styles/themes'
import styled from 'styled-components'

interface IsBreakpointProp {
  isBreakPoint: boolean
}
export const Container = styled.div<IsBreakpointProp>`
  position: relative;
  display: ${({ isBreakPoint }) => (!isBreakPoint ? 'block' : 'flex')};
  flex-direction: row;
  min-height: ${({ isBreakPoint }) => isBreakPoint && '100vh'};
  background-color: ${colors.white};
`

export const TopPart = styled.div`
  width: 100%;
  padding: 1.75rem 1.5rem;
  display: flex;
  position: absolute;
  justify-content: space-between;
  @media (min-width: ${breakPoints.small}) {
    padding: 2.5rem 4rem;
  }
`
export const LeftContentBackground = styled.div`
  background-image: url(${RightImage});
  background-position: center center;
  background-size: cover;
  flex-basis: 20%;
  display: flex;
  z-index: 1;
  min-width: 30rem;
  position: relative;
  justify-content: flex-end;
  padding-bottom: 9.25rem;
  flex-direction: column;
  @media (min-width: 1600px) {
    flex-basis: 20%;
  }
`

export const Title = styled.div`
  font-family: PlayfairDisplay-Regular, sans-serif;
  color: ${colors.white};
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
    padding: 0 1.5rem;
  }
`
export const LeftContent = styled.img`
  z-index: 10;
`
export const RightContent = styled.div`
  display: flex;
  gap: 0.2rem;
  font-size: 0.875rem;
  color: ${colors.inputLabel};
`

export const SignUpButton = styled.span`
  color: ${colors.inputValue};
  letter-spacing: 1px;
  transition: all 0.4s;

  &:hover {
    text-decoration: underline;
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

export const ImageDartVader = styled.img`
  position: absolute;
  z-index: 0;
  top: 25vh;
  pointer-events: none;
  transform: translateX(70%);
`

export const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
`
export const ErrorMessageMainTitle = styled.span`
  font-family: Hind-Light, sans-serif;
  color: ${colors.inputValue};
  font-size: 1.75rem;
`
export const ErrorMessageSubTitle = styled.span`
  margin-top: 0.375rem;
  color: ${colors.greySecondary};
`
export const ButtonContainer = styled.div`
  width: fit-content;
  margin-top: 2.5rem;
`

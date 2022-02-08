import styled, { keyframes } from 'styled-components'
import { colors } from '../../styles/themes'
import { LoaderProps } from './Loader'

export const load = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0 }
`

export const Container = styled.div``
export const Inner = styled.div<LoaderProps>`
  & div {
    right: ${({ right }) => right};
    top: ${({ top }) => top};
    position: absolute;
    animation: ${load} linear 1s infinite;
    background: #ffffff;
    width: 2px;
    height: ${({ size }) => (size === 'normal' ? '12px' : '8px')};
    border-radius: 0px / 0px;
    transform-origin: ${({ size }) =>
      size === 'normal' ? '1px 20.175px' : '1px 12.175px'};
  }
  & div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -0.875s;
    background: #ffffff;
  }
  & div:nth-child(2) {
    transform: rotate(45deg);
    animation-delay: -0.75s;
    background: #ffffff;
  }
  & div:nth-child(3) {
    transform: rotate(90deg);
    animation-delay: -0.625s;
    background: #ffffff;
  }
  & div:nth-child(4) {
    transform: rotate(135deg);
    animation-delay: -0.5s;
    background: #ffffff;
  }
  & div:nth-child(5) {
    transform: rotate(180deg);
    animation-delay: -0.375s;
    background: #ffffff;
  }
  & div:nth-child(6) {
    transform: rotate(225deg);
    animation-delay: -0.25s;
    background: #ffffff;
  }
  & div:nth-child(7) {
    transform: rotate(270deg);
    animation-delay: -0.125s;
    background: #ffffff;
  }
  & div:nth-child(8) {
    transform: rotate(315deg);
    animation-delay: 0s;
    background: #ffffff;
  }
`

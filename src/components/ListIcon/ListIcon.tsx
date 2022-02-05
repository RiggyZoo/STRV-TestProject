import React, { FC } from 'react'
import { colors } from '../../styles/themes'

export interface IIconProps {
  isActive: boolean
}

export const ListIcon: FC<IIconProps> = ({ isActive }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H24V24H0V0Z"
        stroke="black"
        strokeOpacity="0.01"
        strokeWidth="0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 18H21V12H4V18ZM4 5V11H21V5H4Z"
        fill={isActive ? colors.inputValue : colors.grey}
      />
    </svg>
  )
}

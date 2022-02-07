import React, { FC } from 'react'
import GridIcon from './icon-grid.svg'
import ListIcon from './icon-list.svg'
import { SvgIcon } from './styles'
import { colors } from '../../styles/themes'

export interface IChangeViewIconProps {
  isActive: boolean
  mode: 'grid' | 'list'
  onClick: () => void
}

export const ChangeViewIcon: FC<IChangeViewIconProps> = ({
  isActive,
  mode,
  onClick,
}) => {
  console.log(isActive, 'from aa')
  return (
    <div>
      {mode === 'grid' ? (
        <svg
          width="17"
          height="13"
          viewBox="0 0 17 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 6H5V0H0V6ZM0 13H5V7H0V13ZM6 13H11V7H6V13ZM12 13H17V7H12V13ZM6 6H11V0H6V6ZM12 0V6H17V0H12Z"
            fill={isActive ? colors.inputValue : colors.grey}
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0H24V24H0V0Z"
            stroke="black"
            stroke-opacity="0.01"
            stroke-width="0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 18H21V12H4V18ZM4 5V11H21V5H4Z"
            fill={isActive ? colors.inputValue : colors.grey}
          />
        </svg>
      )}

      {/*<SvgIcon
        src={mode === 'list' ? ListIcon : GridIcon}
        alt=""
        style={{ color: 'red' }}
        isActive={isActive}
      />*/}
    </div>
  )
}

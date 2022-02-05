import React, { FC } from 'react'
import GridIcon from './icon-grid.svg'
import ListIcon from './icon-list.svg'
import { SvgIcon } from './styles'

export interface IChangeViewIconProps {
  isActive: boolean
  mode: 'grid' | 'list'
}

export const ChangeViewIcon: FC<IChangeViewIconProps> = ({
  isActive,
  mode,
}) => {
  return (
    <div>
      <SvgIcon src={mode === 'list' ? ListIcon : GridIcon} alt="" />
    </div>
  )
}

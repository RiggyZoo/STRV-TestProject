import React, { FC } from 'react'
import { StyledComponent } from 'styled-components'
import PlusIcon from '../../assets/icons/plusIcon.svg'
import SaveIcon from '../../assets/icons/icon-save.svg'
import { StyledButton, SvgElement, ConfirmButton } from './styles'

export interface ICircleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: 'default' | 'confirm'
}

const CircleButton: FC<ICircleButtonProps> = ({ theme, ...rest }) => {
  const themes = {
    default: StyledButton,
    confirm: ConfirmButton,
  }

  const Style: StyledComponent<'button', any, ICircleButtonProps, any> =
    themes[theme || 'default']

  return (
    <Style {...rest}>
      <SvgElement src={theme === 'confirm' ? SaveIcon : PlusIcon} alt="icon" />
    </Style>
  )
}

export { CircleButton }

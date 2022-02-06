import React, { FC } from 'react'
import { StyledButton, SvgElement, ConfirmButton } from './styles'
import PlusIcon from '../../assets/icons/plusIcon.svg'
import SaveIcon from '../../assets/icons/icon-save.svg'
import { StyledComponent } from 'styled-components'

export interface ICircleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: CircleButtons
}

export enum CircleButtons {
  default = 'default',
  confirm = 'confirm',
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
      <SvgElement
        src={theme === CircleButtons.confirm ? SaveIcon : PlusIcon}
        alt="icon"
      />
    </Style>
  )
}

export { CircleButton }

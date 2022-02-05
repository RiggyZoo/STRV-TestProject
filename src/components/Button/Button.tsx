import React, { FC } from 'react'
import {
  DefaultButton,
  RedButton,
  GreyButton,
  GhostButton,
  RefreshButton,
} from './styles'
import { StyledComponent } from 'styled-components'
import { Loader } from '../Loader'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: Buttons
  size: ButtonSize
  loading: boolean
}

export enum Buttons {
  default = 'default',
  red = 'redButton',
  grey = 'greyButton',
  ghost = 'ghostButton',
  refresh = 'refreshButton',
}
export enum ButtonSize {
  main = '0.3rem 4rem',
  small = '0.15rem 1.5rem',
}

export const Button: FC<IButtonProps> = ({
  children,
  theme,
  onClick,
  loading,
  size = ButtonSize.small,
  ...rest
}) => {
  const themes = {
    default: DefaultButton,
    redButton: RedButton,
    greyButton: GreyButton,
    ghostButton: GhostButton,
    refreshButton: RefreshButton,
  }

  const Style: StyledComponent<'button', any, IButtonProps, any> =
    themes[theme || 'default']

  return (
    <Style onClick={onClick} type="button" size={size} {...rest}>
      {loading ? <Loader /> : <span>{children}</span>}
    </Style>
  )
}

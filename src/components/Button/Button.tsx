import React, { FC } from 'react'
import { StyledComponent } from 'styled-components'
import { Loader } from '../Loader'
import { DefaultButton, RedButton, GreyButton, RefreshButton } from './styles'

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: 'green' | 'red' | 'grey' | 'refresh'
  size: 'main' | 'small'
  loading?: any
  ref?: any
}

const Button: FC<IButtonProps> = ({
  children,
  theme = 'green',
  loading,
  ref,
  size = 'small',
  ...rest
}) => {
  const themes = {
    green: DefaultButton,
    red: RedButton,
    grey: GreyButton,
    refresh: RefreshButton,
  }

  const Style: StyledComponent<'button', any, IButtonProps, any> =
    themes[theme || 'default']

  return (
    <Style ref={ref} type="button" size={size} $loading={loading} {...rest}>
      {loading && (
        <Loader
          top={size === 'main' ? '12%' : '10%'}
          right="50%"
          size={size === 'main' ? 'normal' : 'small'}
        />
      )}{' '}
      <span>{children}</span>
    </Style>
  )
}

export { Button }

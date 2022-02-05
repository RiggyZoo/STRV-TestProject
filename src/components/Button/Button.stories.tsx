import React, { ReactNode } from 'react'
import { Story } from '@storybook/react'
import { Button, Buttons, ButtonSize } from './Button'

interface IButton {
  children: string | ReactNode
  name: string
  theme: Buttons
  size: ButtonSize
  loading: boolean
}

export default {
  title: 'Components/Button',

  component: Button,
}

const Template: Story<IButton> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Button',
  theme: Buttons.red,
  size: ButtonSize.main,
  loading: true,
}

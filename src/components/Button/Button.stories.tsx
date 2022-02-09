import React from 'react'
import { Story } from '@storybook/react'
import { Button, IButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template: Story<IButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Button',
  theme: 'red',
  size: 'main',
  $loading: false,
}

import React from 'react'
import { Story } from '@storybook/react'
import { CircleButton, ICircleButtonProps } from './CircleButton'

export default {
  title: 'Components/CircleButton',

  component: CircleButton,
}

const Template: Story<ICircleButtonProps> = (args) => <CircleButton {...args} />

export const Default = Template.bind({})

Default.args = {
  theme: 'default',
}

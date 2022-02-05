import React from 'react'
import { Story } from '@storybook/react'
import { Input, InputProps } from './Input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {},
}

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})

Default.args = { label: 'Login:', required: true, placeholder: 'nikita' }

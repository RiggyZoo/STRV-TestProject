import React from 'react'
import { Story } from '@storybook/react'
import { Loader } from './Loader'

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {},
}

const Template: Story<any> = (args) => <Loader {...args} />

export const Default = Template.bind({})

Default.args = {}

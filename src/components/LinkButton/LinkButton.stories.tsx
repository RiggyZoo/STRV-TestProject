import React from 'react'
import { Story } from '@storybook/react'
import { LinkButton } from './LinkButton'

export default {
  title: 'Components/LinkButton',
  component: LinkButton,
  argTypes: {},
}

const Template: Story<any> = (args) => <LinkButton {...args} />

export const Default = Template.bind({})

Default.args = { label: 'Login:', required: true, placeholder: 'nikita' }

import React from 'react'
import { Story } from '@storybook/react'
import { ListIcon, IIconProps } from './ListIcon'

export default {
  title: 'Components/ListIcon',

  component: ListIcon,
}

const Template: Story<IIconProps> = (args) => <ListIcon {...args} />

export const Default = Template.bind({})

Default.args = {
  isActive: true,
}

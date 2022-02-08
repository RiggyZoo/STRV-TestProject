import React from 'react'
import { Story } from '@storybook/react'
import { ChangeViewIcon, IChangeViewIconProps } from './ChangeViewIcon'

export default {
  title: 'Components/ChangeViewIcon',

  component: ChangeViewIcon,
}

const Template: Story<IChangeViewIconProps> = (args) => (
  <ChangeViewIcon {...args} />
)

export const Default = Template.bind({})

Default.args = {
  isActive: true,
  mode: 'list',
  onClick: () => {
    alert('Click')
  },
}

import React from 'react'
import { Story } from '@storybook/react'
import { GridIcon, IIconProps } from './GridIcon'

export default {
  title: 'Components/GridIcon',

  component: GridIcon,
}

const Template: Story<IIconProps> = (args) => <GridIcon {...args} />

export const Default = Template.bind({})

Default.args = {
  isActive: true,
}

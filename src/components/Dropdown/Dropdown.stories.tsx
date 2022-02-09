import React from 'react'
import { Dropdown } from './Dropdown'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {},
}

export const Default = () => {
  return (
    <Dropdown firstName="First name" lastName="Last name">
      <Dropdown.DropdownItem onClick={() => alert('click')}>
        item 1
      </Dropdown.DropdownItem>
      <Dropdown.DropdownItem onClick={() => alert('click')}>
        item 2
      </Dropdown.DropdownItem>
      <Dropdown.DropdownItem onClick={() => alert('click')}>
        {' '}
        item 3
      </Dropdown.DropdownItem>
    </Dropdown>
  )
}

Default.args = {}

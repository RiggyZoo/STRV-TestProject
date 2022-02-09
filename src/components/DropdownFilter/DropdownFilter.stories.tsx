import React from 'react'
import { DropdownFilter } from './DropdownFilter'

export default {
  title: 'Components/DropdownFilter',
  component: DropdownFilter,
  argTypes: {},
}

export const Default = () => {
  return (
    <DropdownFilter onChange={() => alert('change')}>
      <DropdownFilter.Item onClick={() => alert('click')}>
        item 1
      </DropdownFilter.Item>
      <DropdownFilter.Item onClick={() => alert('click')}>
        item 2
      </DropdownFilter.Item>
      <DropdownFilter.Item onClick={() => alert('click')}>
        item 3
      </DropdownFilter.Item>
    </DropdownFilter>
  )
}

Default.args = {}

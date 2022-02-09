import { Button } from '../Button'
import * as ReactDOM from 'react-dom'
import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

describe('Button component tests', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(<Button theme="red" size="small" />, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  it('Renders without crashing ', function () {
    ReactDOM.render(<Button theme="red" size="small" />, container)
  })
  it('Renders correctly', function () {
    const { getByTestId } = render(
      <Button theme={'red'} size={'main'}>
        Click
      </Button>,
      {
        container: container,
      },
    )
    expect(getByTestId('button')).toHaveTextContent('Click')
  })

  it('Matches to snapshot ', function () {
    const tree = renderer
      .create(
        <Button theme={'red'} size={'main'}>
          Click
        </Button>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

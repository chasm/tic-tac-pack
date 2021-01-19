import { expect } from 'chai'
import * as React from 'react'

import { render } from '@testing-library/react'

import App from './'

describe('<App>', () => {
  it('renders heading', () => {
    const { getByText } = render(<App />)

    const toe = getByText(/Doh!/i)

    expect(document.body.contains(toe))
  })

  it('renders game', () => {
    const { getByTestId } = render(<App />)

    const game = getByTestId(/game/i)

    expect(document.body.contains(game))
  })
})

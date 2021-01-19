import { expect } from 'chai'
import * as React from 'react'

import { render } from '@testing-library/react'

import App from './'

describe('<App>', () => {
  it('renders heading', () => {
    const { getByText } = render(<App />)

    const h1 = getByText(/Tic Tac Toe/i)

    expect(document.body.contains(h1))
  })
})

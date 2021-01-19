import { expect } from 'chai'
import * as React from 'react'

import { render } from '@testing-library/react'

import Square from './'

describe('<Square>', () => {
  it('renders game and board', () => {
    const { getByText } = render(<Square player="x" index={0} />)

    const square = getByText(/x/i)

    expect(document.body.contains(square))
  })
})

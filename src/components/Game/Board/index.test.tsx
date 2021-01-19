import { expect } from 'chai'
import * as React from 'react'

import { render } from '@testing-library/react'

import Board from './'

describe('<Board>', () => {
  it('renders game and board', () => {
    const { getByTestId } = render(<Board />)

    const board = getByTestId(/board/i)

    expect(document.body.contains(board))
  })
})

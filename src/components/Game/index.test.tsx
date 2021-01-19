import { expect } from 'chai'
import * as React from 'react'

import { render } from '@testing-library/react'

import Game from './'

describe('<Game>', () => {
  it('renders game and board', () => {
    const { getByTestId } = render(<Game />)

    const game = getByTestId(/game/i)
    const board = getByTestId(/board/i)

    expect(document.body.contains(game))
    expect(document.body.contains(board))
  })
})

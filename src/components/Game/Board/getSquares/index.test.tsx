import { expect } from 'chai'
import * as React from 'react'

import { fireEvent, render } from '@testing-library/react'

import makeSpy from '../../../../utilities/makeSpy'
import { PLAYER_O, PLAYER_X } from '../../constants'
import type { SquareIndex } from '../../index.d'
import getSquares from './'

const handleClick = makeSpy<SquareIndex, undefined>()

describe('getSquares', () => {
  it('returns an array of nine Square components', () => {
    const squares = getSquares([], handleClick)

    expect(squares).to.have.length(9)

    const { getAllByTestId } = render(<>{squares}</>)

    const buttons = getAllByTestId(/square-[0-8]/i)

    expect(buttons).to.have.length(9)
  })

  it('returns an array of nine Squares with moves', () => {
    const squares = getSquares([4, 3, 2, 6, 0, 1, 8], handleClick)

    const { getAllByText } = render(<>{squares}</>)

    const playerX = getAllByText(PLAYER_X)
    const playerO = getAllByText(PLAYER_O)

    expect(playerX).to.have.length(4)
    expect(playerO).to.have.length(3)
  })

  it('handles clicks', () => {
    const squares = getSquares([], handleClick)

    const { getByTestId } = render(<>{squares}</>)

    const square4 = getByTestId(/square-4/i)

    fireEvent.click(square4)

    expect(handleClick.getCalls()).to.deep.equal([[4]])
    expect(handleClick.getCallCount()).to.equal(1)
  })
})

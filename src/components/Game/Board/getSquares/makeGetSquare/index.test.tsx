import { expect } from 'chai'

import { fireEvent, render } from '@testing-library/react'

import makeSpy from '../../../../../utilities/makeSpy'
import { PLAYER_X } from '../../../constants'
import type { SquareIndex } from '../../../index.d'
import makeGetSquare from './'

const handleClick = makeSpy<SquareIndex, undefined>()

describe('makeGetSquares', () => {
  it('returns a function that makes a Square component', () => {
    const getSquare = makeGetSquare([], handleClick)
    const square = getSquare('', 4)

    const { getByTestId } = render(square)

    const button = getByTestId(/square-4/i)

    expect(document.body.contains(button))
  })

  it('makes the Square playable', () => {
    const getSquare = makeGetSquare([], handleClick)
    const square = getSquare('', 4)

    const { getByTestId } = render(square)

    const button = getByTestId(/square-4/i)

    console.log(button)

    fireEvent.click(button)

    expect(handleClick.getCalls()).to.deep.equal([[4]])
    expect(handleClick.getCallCount()).to.deep.equal(1)
  })

  it('marks the Square as played with the correct player (if played)', () => {
    const getSquare = makeGetSquare([4, 3, 2], handleClick)
    const square = getSquare('', 4)

    const { getByText } = render(square)

    const span = getByText(PLAYER_X)

    expect(document.body.contains(span))
  })
})

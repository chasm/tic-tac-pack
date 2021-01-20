import { expect } from 'chai'
import * as React from 'react'

import { fireEvent, render } from '@testing-library/react'

import makeSpy from '../../../../utilities/makeSpy'
import { PLAYER_O, PLAYER_X } from '../../constants'
import type { SquareIndex } from '../../index.d'
import Square from './'

const handleClick = makeSpy<SquareIndex, undefined>()

describe('<Square>', () => {
  it('renders empty square', () => {
    const { getByTestId } = render(<Square onClick={handleClick} square={0} />)

    const square = getByTestId(/square-0/i)

    expect(document.body.contains(square))
  })

  it(`renders square with ${PLAYER_X}`, () => {
    const { getByText } = render(
      <Square onClick={handleClick} player={PLAYER_X} square={1} />,
    )

    const square = getByText(PLAYER_X)

    expect(document.body.contains(square))
  })

  it(`renders square with ${PLAYER_O}`, () => {
    const { getByText } = render(
      <Square onClick={handleClick} player={PLAYER_O} square={2} />,
    )

    const square = getByText(PLAYER_O)

    expect(document.body.contains(square))
  })

  it(`calls onClick with the index of the square when clicked if unplayed`, () => {
    const { getByTestId } = render(<Square onClick={handleClick} square={3} />)

    const square = getByTestId(/square-3/i)

    fireEvent.click(square)

    expect(handleClick.getCalls()).to.deep.equal([[3]])
    expect(handleClick.getCallCount()).to.equal(1)

    handleClick.reset()
  })

  it(`ignores clicks if played`, () => {
    const { getByTestId } = render(
      <Square onClick={handleClick} player={PLAYER_O} square={3} />,
    )

    const square = getByTestId(/square-3/i)

    fireEvent.click(square)

    expect(handleClick.getCalls()).to.deep.equal([])
    expect(handleClick.getCallCount()).to.equal(0)

    handleClick.reset()
  })
})

import React from 'react'

import type { SquareIndex } from '../index.d'
import getPlayerFromMove from '../utilities/getPlayerFromMove'
import Square from './Square'

const moves = [4, 3, 2, 6, 0, 1, 8]

export function getSquare(_: string, square: number): JSX.Element {
  return (
    <Square
      key={`square-${square}`}
      square={square as SquareIndex}
      player={getPlayerFromMove(square, moves)}
    />
  )
}

export function getSquares(): JSX.Element[] {
  const squares: string[] = ['', '', '', '', '', '', '', '', '']
  return squares.map(getSquare)
}

export default function Board(): JSX.Element {
  return (
    <section data-testid="board" className="board">
      {getSquares()}
    </section>
  )
}

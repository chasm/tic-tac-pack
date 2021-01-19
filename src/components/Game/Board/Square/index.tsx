import React from 'react'

import type { Player, SquareIndex } from '../../index.d'

export type SquareProps = {
  square: SquareIndex
  player?: Player
}

export default function Square(props: SquareProps): JSX.Element {
  const { square, player } = props

  return (
    <div
      data-square={square}
      data-testid={`square-${square}`}
      className={`square ${player ? player : ''}`}
    >
      {player}
    </div>
  )
}

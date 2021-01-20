import React from 'react'

import type { Player, SquareIndex } from '../../index.d'

export type SquareProps = {
  onClick: (arg0: SquareIndex) => void
  player?: Player
  square: SquareIndex
}

export default function Square(props: SquareProps): JSX.Element {
  const { onClick, player, square } = props

  const handleClick = () => player || onClick(square)

  return player ? (
    <span
      className={`square ${player}`}
      data-square={square}
      data-testid={`square-${square}`}
    >
      {player}
    </span>
  ) : (
    <button
      className="square"
      data-square={square}
      data-testid={`square-${square}`}
      onClick={handleClick}
    />
  )
}

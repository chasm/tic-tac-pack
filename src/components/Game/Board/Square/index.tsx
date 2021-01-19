import React from 'react'

export type SquareProps = {
  index: number
  player?: 'x' | 'o'
}

export default function Square(props: SquareProps): JSX.Element {
  const { index, player } = props

  return (
    <div data-square={index} className={`square ${player ? player : ''}`}>
      {player}
    </div>
  )
}

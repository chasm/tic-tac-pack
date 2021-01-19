import React from 'react'

import Square from './Square'

export function getSquares(): JSX.Element[] {
  return new Array(9)
    .fill('')
    .map((_, index) => (
      <Square
        key={`square-${index}`}
        index={index}
        player={index % 2 === 0 ? 'x' : 'o'}
      />
    ))
}

export default function Board(): JSX.Element {
  return (
    <section data-testid="board" className="board">
      {getSquares()}
    </section>
  )
}

import React from 'react'

import Board from './Board'

export default function Game(): JSX.Element {
  return (
    <article data-testid="game" className="game">
      <Board />
    </article>
  )
}

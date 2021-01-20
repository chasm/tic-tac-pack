import React, { useState } from 'react'

import type { SquareIndex } from '../index.d'
import getSquares from './getSquares'

export type BoardProps = {
  defaultMoves?: SquareIndex[]
}

const emptyMoves: SquareIndex[] = []

export default function Board(props: BoardProps): JSX.Element {
  const { defaultMoves } = props
  const [moves, setMoves] = useState(defaultMoves || emptyMoves)

  const handleMove = (square: SquareIndex) => setMoves([...moves, square])

  return (
    <section data-testid="board" className="board">
      {getSquares(moves, handleMove)}
    </section>
  )
}

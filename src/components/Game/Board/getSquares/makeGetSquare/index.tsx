import React from 'react'

import type { GetSquare, HandleMove, SquareIndex } from '../../../index.d'
import getPlayerFromMove from '../../../utilities/getPlayerFromMove'
import Square from '../../Square'

const makeGetSquare = (
  moves: SquareIndex[],
  handleMove: HandleMove,
): GetSquare => (_: string, square: number): JSX.Element => (
  <Square
    key={`square-${square}`}
    onClick={handleMove}
    player={getPlayerFromMove(square, moves)}
    square={square as SquareIndex}
  />
)

export default makeGetSquare

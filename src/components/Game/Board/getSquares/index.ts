import type { HandleMove, SquareIndex } from '../../index.d'
import makeGetSquare from './makeGetSquare'

export default function getSquares(
  moves: SquareIndex[],
  handleMove: HandleMove,
): JSX.Element[] {
  const squares: string[] = new Array(9).fill('') as string[]

  return squares.map(makeGetSquare(moves, handleMove))
}

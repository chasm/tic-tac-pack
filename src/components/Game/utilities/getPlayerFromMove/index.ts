import { PLAYER_O, PLAYER_X } from '../../constants'
import type { Player } from '../../index.d'

export default function getPlayerFromMove(
  square: number,
  moves: number[],
): Player {
  const index = moves.indexOf(square)

  if (index < 0) {
    return undefined
  }

  return index % 2 === 0 ? PLAYER_X : PLAYER_O
}

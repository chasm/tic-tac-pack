import { expect } from 'chai'

import { PLAYER_O, PLAYER_X } from '../../constants'
import getPlayerFromMove from './'

const moves = [4, 1, 3]

describe('getPlayerFromMove>', () => {
  it(`gets ${PLAYER_X} from even-numbered moves (${PLAYER_X} plays first)`, () => {
    const player = getPlayerFromMove(3, moves)

    expect(player).to.equal(PLAYER_X)
  })

  it(`gets ${PLAYER_O} from odd-numbered moves (${PLAYER_O} plays second)`, () => {
    const player = getPlayerFromMove(1, moves)

    expect(player).to.equal(PLAYER_O)
  })

  it('returns an empty string if square has not yet been played', () => {
    const player = getPlayerFromMove(7, moves)

    expect(player).to.be.undefined
  })
})

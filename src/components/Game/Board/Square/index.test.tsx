import { expect } from 'chai'
import * as React from 'react'

import { render } from '@testing-library/react'

import { PLAYER_O, PLAYER_X } from '../../constants'
import Square from './'

describe('<Square>', () => {
  it('renders empty square', () => {
    const { getByTestId } = render(<Square square={0} />)

    const square = getByTestId(/square-0/i)

    expect(document.body.contains(square))
  })

  it(`renders square with ${PLAYER_X}`, () => {
    const { getByText } = render(<Square player={PLAYER_X} square={1} />)

    const square = getByText(PLAYER_X)

    expect(document.body.contains(square))
  })

  it(`renders square with ${PLAYER_O}`, () => {
    const { getByText } = render(<Square player={PLAYER_O} square={2} />)

    const square = getByText(PLAYER_O)

    expect(document.body.contains(square))
  })
})

import { expect } from 'chai'
import * as React from 'react'

import { fireEvent, render } from '@testing-library/react'

import Board from './'

describe('<Board>', () => {
  it('renders game and board', () => {
    const { getByTestId } = render(<Board />)

    const board = getByTestId(/board/i)

    expect(document.body.contains(board))
  })

  it('renders moves properly', () => {
    const { getByTestId, getAllByText } = render(
      <Board defaultMoves={[4, 3, 2]} />,
    )

    const square6 = getByTestId(/square-6/i)

    expect(getAllByText(/x/i).length).to.equal(2)
    expect(getAllByText(/o/i).length).to.equal(1)

    fireEvent.click(square6)

    expect(getAllByText(/x/i).length).to.equal(2)
    expect(getAllByText(/o/i).length).to.equal(2)
  })
})

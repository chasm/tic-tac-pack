export type PlayerO = 'o'
export type PlayerX = 'x'

export type Player = PlayerO | PlayerX | undefined

export type SquareIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type HandleMove = (square: SquareIndex) => void
export type GetSquare = (_: string, square: number) => JSX.Element

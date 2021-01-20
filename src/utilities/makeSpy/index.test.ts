import { expect } from 'chai'

import makeSpy from './'

type Primitive =
  | string
  | number
  | boolean
  | symbol
  | null
  | undefined
  | Primitive[]
  | {
      [x: string]: Primitive
    }

describe('makeSpy', () => {
  it('tracks calls to the spy and allows reset', () => {
    const spy = makeSpy<Primitive, number>()

    spy(1, 2, 3)
    spy(4, 5, 6)
    spy(true, false, 'x')

    expect(spy.getCalls()).to.deep.equal([
      [1, 2, 3],
      [4, 5, 6],
      [true, false, 'x'],
    ])
    expect(spy.getCallCount()).to.equal(3)

    spy.reset()

    expect(spy.getCalls()).to.deep.equal([])
    expect(spy.getCallCount()).to.equal(0)
  })

  it('tracks can return once, twice, etc. or always', () => {
    const once = 'ONCE'
    const twice = 'TWICE'
    const always = 'ALWAYS'

    const spy = makeSpy<Primitive, string>()

    spy.returnAlways(always)
    spy.returnOnce(once)
    spy.returnOnce(twice)

    expect(spy()).to.equal(once)
    expect(spy()).to.equal(twice)
    expect(spy()).to.equal(always)
    expect(spy()).to.equal(always)
    expect(spy()).to.equal(always)

    spy.reset()
  })

  it('returns the passed arguments if once/always not set', () => {
    const spy = makeSpy<Primitive, string>()

    expect(spy()).to.deep.equal([])
    expect(spy('x')).to.deep.equal(['x'])
    expect(spy('x', 'y')).to.deep.equal(['x', 'y'])
    expect(spy('x', 'y', 'z')).to.deep.equal(['x', 'y', 'z'])

    spy.reset()
  })
})

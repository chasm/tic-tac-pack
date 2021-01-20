export type SpyReturn<T, U> = U | T[] | undefined
export type Spy<T, U> = {
  returnAlways: (toReturn: U) => void
  returnOnce: (toReturn: U) => void
  getCalls: () => T[][]
  getCallCount: () => number
  reset: () => void
} & ((...args: T[]) => SpyReturn<T, U>)

export default function makeSpy<T, U>(): Spy<T, U> {
  let calls: T[][] = []
  let returns: U[] = []
  let always: U | undefined = undefined

  const fn = (...args: T[]): SpyReturn<T, U> => {
    calls.push(args)

    if (returns.length > 0) {
      return returns.shift()
    }

    if (typeof always !== 'undefined') {
      return always
    }

    return args
  }

  fn.returnOnce = (toReturn: U) => {
    returns.push(toReturn)
  }

  fn.returnAlways = (toReturn: U) => {
    always = toReturn
  }

  fn.getCalls = () => calls
  fn.getCallCount = () => calls.length

  fn.reset = () => {
    calls = []
    returns = []
    always = undefined
  }

  return fn
}

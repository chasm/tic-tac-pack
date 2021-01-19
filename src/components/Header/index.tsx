import React from 'React'

export default function Header(): JSX.Element {
  return (
    <header>
      <h1>
        <span className="tic">Tic</span> <span className="tac">Tac</span>{' '}
        <span className="toe">Doh!</span>
      </h1>
    </header>
  )
}

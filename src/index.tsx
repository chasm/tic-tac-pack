import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
type Hot = {
  accept: () => void
}

const hot = import.meta.hot as Hot

if (hot) {
  hot.accept()
}

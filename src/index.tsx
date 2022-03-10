import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalCSS from './global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

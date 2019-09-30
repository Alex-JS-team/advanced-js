import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<App />, document.querySelector('#root'))

serviceWorker.unregister()

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'

import * as serviceWorker from './serviceWorker'

const myEnv = dotenv.config()
console.log('myEnv', myEnv)
dotenvExpand(myEnv)
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

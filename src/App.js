import React, { Component } from 'react'
import './App.css'
import 'bulma/css/bulma.min.css'
import Home from './views/home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <button className="button is-dark"> 点击开始</button>
      </div>
    )
  }
}

export default App

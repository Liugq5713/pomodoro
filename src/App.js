import React, { Component } from 'react'
import './App.css'
import Home from './views/home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <button className="button"> 点击开始</button>
      </div>
    )
  }
}

export default App

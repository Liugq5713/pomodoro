// eslint-disable
import React, { Component } from 'react'
import Content from '../content'
import Header from '../header'
import Congratulation from '../congratulation'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class Layout extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className='has-background-white'>
            <Header />
          </div>
          <Route path='/' exact component={Content} />
          <Route path='/congratulation' component={Congratulation} />
        </div>
      </Router>
    )
  }
}

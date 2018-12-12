// eslint-disable
import React, { Component } from 'react'
import Content from '../content'
import Header from '../header'
import Congratulation from '../congratulation'
import './index.css'



export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Congratulation />
      </div>
    )
  }
}

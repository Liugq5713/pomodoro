// eslint-disable
import React, { Component } from 'react'
import logo from './logo.svg'

export default class Layout extends Component {
  render() {
    return (
      <nav
        className='navbar has-background-black-ter'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='navbar-brand'>
          <div
            className='navbar-item is-paddingless'
            href='https://github.com/Liugq5713'
          >
            <img className='svg' src={logo} alt='' width='112' height='28' />
          </div>
          <a
            role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            href='https://github.com/Liugq5713'
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>
      </nav>
    )
  }
}

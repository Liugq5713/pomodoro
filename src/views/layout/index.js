// eslint-disable
import React, { Component } from 'react'
import Content from '../content'
import logo from './logo.svg'
import './index.css'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar has-background-black-ter"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <div
              className="navbar-item is-paddingless"
              href="http://kushner.wallstreetcn.com/"
            >
              <img className="svg" src={logo} alt="" width="112" height="28" />
            </div>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              href="http://kushner.wallstreetcn.com/"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
        </nav>
        <Content />
      </div>
    )
  }
}

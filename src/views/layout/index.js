// eslint-disable
import React,{Component} from 'react'
import logo from './logo.svg'
import  './index.css'

export default class Layout extends Component {
  render(){

    return (
        <nav className="navbar has-background-black-ter" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <div className="navbar-item is-paddingless" href='http://kushner.wallstreetcn.com/'>
              <img className='svg' src={logo} alt="" width="112" height="28" />
            </div>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" href='http://kushner.wallstreetcn.com/'>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>
      )
  }
}
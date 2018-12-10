// eslint-disable
import React,{Component} from 'react'
import logo from './logo.svg'
import  './index.css'

export default class Layout extends Component {
  render(){

    return (
      <div className='test'> 
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href='http://kushner.wallstreetcn.com/'>
            <object type="image/svg+xml" data={logo} class="logo">
              Kiwi Logo
            </object>
              <img className='svg' src={logo} alt="" width="112" height="28" />
            </a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" href='http://kushner.wallstreetcn.com/'>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>
      <h1>hello</h1>
      </div>
      )
  }
}
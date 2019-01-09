import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Time from './time'

const buttonStyle = {
  margin: '0px 10px',
};
class CountDown extends Component {
  constructor() {
    super()
    this.timer = undefined
    this.state = {
      m: 0,
      s: 2
    }
  }

  beginCountDown = () => {
    this.timer = setInterval(() => {
      if (this.start(this.state) === 0) {
        clearInterval(this.timer)
        this.props.history.push('/congratulation')
      }
    }, 1000)
  }

  start({ m, s }) {
    if (s > 0) {
      this.setState({ s: s - 1 })
    } else {
      if (m > 0) {
        this.setState({ m: m - 1, s: 59 })
      }
    }
    return m + s
  }

  reset = () => {
    clearInterval(this.timer)
    this.setState({ m: 10, s: 0 })
  }

  render() {
    const { m, s } = this.state
    return (
      <div>
        <Time m={m} s={s} />
        <div className='has-text-centered'>
          <div
            className='button is-primary is-rounded'
            style={buttonStyle}
            onClick={this.beginCountDown}
          >
            START
          </div>
          <div className='button is-info is-rounded' onClick={this.reset}>
            RESTART
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CountDown)

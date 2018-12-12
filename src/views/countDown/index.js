import React, { Component } from 'react'
import Time from './time'

export default class CountDown extends Component {
  constructor() {
    super()
    this.state = {
      m: 25,
      s: 0
    }
  }

  beginCountDown = () => {
    setInterval(() => {
      this.setMinuteAndSecond(this.state)
    }, 1000)
  }

  setMinuteAndSecond({ m, s }) {
    if (s > 0) {
      this.setState({ s: s - 1 })
    } else {
      this.setState({ m: m - 1, s: 59 })
    }
  }

  render() {
    const { m, s } = this.state
    return (
      <div className="card has-background-grey">
        <Time m={m} s={s} />
        <div className="has-text-centered">
          <div className="button is-primary" onClick={this.beginCountDown}>
            开始
          </div>
        </div>
      </div>
    )
  }
}

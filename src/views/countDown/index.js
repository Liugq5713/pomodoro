import React, { Component } from 'react'
import Time from './time'
import { createNotification } from 'utils/notify'

export default class CountDown extends Component {
  constructor() {
    super()
    this.timer = undefined
    this.state = {
      m: 0,
      s: 10
    }
  }

  beginCountDown = () => {
    this.timer = setInterval(() => {
      if (this.setMinuteAndSecond(this.state) === 0) {
        clearInterval(this.timer)
        createNotification({ title: '番茄', body: '25分钟到了' })
      }
    }, 1000)
  }

  setMinuteAndSecond({ m, s }) {
    if (s > 0) {
      this.setState({ s: s - 1 })
    } else {
      if (m > 0) {
        this.setState({ m: m - 1, s: 59 })
      }
    }
    return m + s
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

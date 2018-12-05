import React, { Component } from 'react'
import { requestNotifyPermission, createNotification } from '../../utils/notify'

export default class Home extends Component {
  componentDidMount() {
    requestNotifyPermission()
    const notification = {
      title: 'test',
      text: 'hoho',
      img: 'dd'
    }
    createNotification(notification)
  }
  render() {
    return <div>Hi</div>
  }
}

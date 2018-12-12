import React, { Component } from 'react'

// import { requestNotifyPermission, createNotification } from '../../utils/notify'
import Layout from '../layout'

export default class Home extends Component {
  componentDidMount() {
    // requestNotifyPermission()
    // const notification = {
    //   title: 'test',
    //   text: 'hoho',
    //   img: 'dd'
    // }
    // createNotification(notification)
    // axios.get('http://localhost:5000/api/all').then(res=>{
    //   console.log('res', res)
    // })
  }
  render() {
    return (
      <div>
        <Layout />
      </div>
    )
  }
}

import React from 'react'
import CountDown from 'views/countDown'
import renderer from 'react-test-renderer'
import { HashRouter as Router } from 'react-router-dom'

test('', () => {
  const component = renderer.create(
    <Router>
      <CountDown />
    </Router>
  )
  let test = component.getInstance()
  console.log('test', test.props)
  console.log('-------------')
  console.log('test', test.props)

  let tree = component.toJSON()
  console.log('tree.props0', tree.children[0].children)
  console.log('tree.props1', tree.children[1].props)
})

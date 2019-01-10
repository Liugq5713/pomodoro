import React from 'react'
import Header from 'views/header'
import renderer from 'react-test-renderer'
test('should have header every page', () => {
  const component = renderer.create(<Header />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

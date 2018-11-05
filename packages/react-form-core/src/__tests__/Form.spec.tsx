import React from 'react'
import { Form } from './../'
import renderer from 'react-test-renderer'

describe('<Form />', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Form initialValues={{}} onSubmit={() => void 0}>
        <div />
      </Form>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

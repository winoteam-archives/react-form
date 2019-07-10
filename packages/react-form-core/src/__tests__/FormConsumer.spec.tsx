import React from 'react'
import { Form, FormConsumer, FormField } from './../'
import renderer from 'react-test-renderer'

describe('<Form />', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Form initialValues={{ name: 'Léo' }} onSubmit={() => void 0}>
        {() => (
          <FormConsumer>
            {form => <div>{JSON.stringify(form)}</div>}
          </FormConsumer>
        )}
      </Form>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('re-renders correctly', () => {
    let onChange: (value: any) => void = () => void 0
    const renderSpy = jest.fn()
    renderer.create(
      <Form initialValues={{ name: 'Léo' }} onSubmit={() => void 0}>
        {() => (
          <div>
            <FormField name="name">
              {field => {
                onChange = field.onChange
                return null
              }}
            </FormField>
            <FormConsumer>
              {form => {
                renderSpy(form)
                return <div>{JSON.stringify(form)}</div>
              }}
            </FormConsumer>
          </div>
        )}
      </Form>,
    )
    onChange('LéLé')
    expect(renderSpy).toHaveBeenCalledTimes(2)
  })
})

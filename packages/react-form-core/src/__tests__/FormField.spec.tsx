import React, { ChangeEvent } from 'react'
import { Form, FormField } from './../'
import renderer from 'react-test-renderer'

describe('<FormField />', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Form onSubmit={() => void 0}>
        {() => (
          <FormField name="name">
            {props => {
              return <div>{JSON.stringify(props)}</div>
            }}
          </FormField>
        )}
      </Form>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with initial value defined in root', () => {
    const component = renderer.create(
      <Form initialValues={{ name: 'Lélé' }} onSubmit={() => void 0}>
        {() => (
          <FormField name="name">
            {props => {
              return <div>{JSON.stringify(props)}</div>
            }}
          </FormField>
        )}
      </Form>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with initial value defined in field', () => {
    const component = renderer.create(
      <Form onSubmit={() => void 0}>
        {() => (
          <FormField name="name" initialValue="Lélé">
            {props => {
              return <div>{JSON.stringify(props)}</div>
            }}
          </FormField>
        )}
      </Form>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with initial value defined in root and field', () => {
    const component = renderer.create(
      <Form initialValues={{ name: 'Léo' }} onSubmit={() => void 0}>
        {() => (
          <FormField name="name" initialValue="Lélé">
            {props => {
              return <div>{JSON.stringify(props)}</div>
            }}
          </FormField>
        )}
      </Form>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with value defined', () => {
    let onChange: (e: React.ChangeEvent<any>) => void = () => void 0
    let component = renderer.create(
      <Form onSubmit={() => void 0}>
        {() => (
          <FormField name="name">
            {props => {
              onChange = props.onChange
              return <div>{JSON.stringify(props)}</div>
            }}
          </FormField>
        )}
      </Form>,
    )
    onChange({
      target: { name: 'name', value: 'Léo' },
    } as React.ChangeEvent<any>)
    expect(component.toJSON()).toMatchSnapshot()
    component.update(
      <Form onSubmit={() => void 0}>
        {() => (
          <FormField name="name" value="Lélé">
            {props => <div>{JSON.stringify(props)}</div>}
          </FormField>
        )}
      </Form>,
    )
    expect(component.toJSON()).toMatchSnapshot()
    onChange({
      target: { name: 'name', value: 'Léa' },
    } as React.ChangeEvent<any>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('handles onChange func', () => {
    let onChange: (e: React.ChangeEvent<any>) => void = () => void 0
    const component = renderer.create(
      <Form onSubmit={() => void 0}>
        {() => (
          <FormField name="name">
            {props => {
              onChange = props.onChange
              return <div>{JSON.stringify(props)}</div>
            }}
          </FormField>
        )}
      </Form>,
    )
    const event = { target: { name: 'name', value: 'Léo' } }
    onChange(event as React.ChangeEvent<any>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handles onBlur func', () => {
    let onBlur: (e: React.ChangeEvent<any>) => void = () => void 0
    const component = renderer.create(
      <Form onSubmit={() => void 0}>
        {() => (
          <FormField name="name">
            {props => {
              onBlur = props.onBlur
              return <div>{JSON.stringify(props)}</div>
            }}
          </FormField>
        )}
      </Form>,
    )
    const event = { target: { name: 'name' } }
    onBlur(event as ChangeEvent<any>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('re-renders as few times as possible', () => {
    const renderSpy = jest.fn()
    renderer.create(
      <Form onSubmit={() => void 0}>
        {() => (
          <FormField name="name" initialValue="Léo">
            {() => {
              return null
            }}
          </FormField>
        )}
      </Form>,
    )
    expect(renderSpy).toHaveBeenCalledTimes(1)
  })
})

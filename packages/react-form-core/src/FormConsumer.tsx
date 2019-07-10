import * as React from 'react'
import invariant from 'invariant'

import FormContextTypes from './FormContext'
import { FormState, FormContext } from './TypeDefinitions'

type Props<Values> = {
  children: (formState: FormState<Values>) => React.ReactNode
}

type State<Values> = FormState<Values>

type Context<Values> = { form?: FormContext<Values> }

export default class FormConsumer<Values> extends React.Component<
  Props<Values>,
  State<Values>
> {
  static contextTypes = FormContextTypes

  constructor(props: Props<Values>, context: Context<Values>) {
    super(props, context)
    invariant(
      context.form,
      'The context `form` is marked as required in `FormConsumer`, but its value is `undefined` in `FormConsumer`',
    )
    const form = context.form as FormContext<Values>
    this.state = form.getState()
  }

  componentDidMount() {
    invariant(
      this.context.form,
      'The context `form` is marked as required in `FormConsumer`, but its value is `undefined` in `FormConsumer`',
    )
    const form = this.context.form as FormContext<Values>
    form.subscribe(this.onSubscribeFormChanges)
  }

  componentWillUnmount() {
    invariant(
      this.context.form,
      'The context `form` is marked as required in `FormConsumer`, but its value is `undefined` in `FormConsumer`',
    )
    const form = this.context.form as FormContext<Values>
    form.unsubscribe(this.onSubscribeFormChanges)
  }

  onSubscribeFormChanges = (formState: FormState<Values>) => {
    this.setState(formState)
  }

  render() {
    const { children } = this.props
    const { form } = this.context
    if (!form) return null
    return children(this.state)
  }
}

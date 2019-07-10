import * as React from 'react'

import FormContextTypes from './FormContext'
import * as actionTypes from './actionTypes'
import { changeFieldError } from './actionCreators'
import {
  FormFieldState,
  FormFieldProps,
  FieldError,
  FormContext,
  FormState,
} from './TypeDefinitions'
import { getFormFieldError } from './utils'

type Props<Value> = FormFieldProps<Value>

type State<Value> = FormFieldState<Value>

type Context<Value> = {
  form?: FormContext<Value>
}

export default class FormField<Value> extends React.Component<
  Props<Value>,
  State<Value>
> {
  static contextTypes = FormContextTypes

  constructor(props: Props<Value>, context: Context<Value>) {
    super(props, context)
    const { initialValue } = props
    this.state = {
      value: initialValue,
      error: undefined,
      isFocused: false,
      isFocusing: false,
    }
  }

  componentDidMount() {
    this.onInitialize()
  }

  componentDidUpdate(prevProps: Props<Value>) {
    const { name } = this.props
    if (prevProps.name !== name) {
      this.onTeardown(prevProps.name)
      this.onInitialize()
    }
  }

  componentWillUnmount() {
    const context = this.context as Context<Value>
    const { form } = context
    if (form) {
      form.unsubscribe(this.onSubscribeFormChanges)
    }
  }

  handleValidate = (value: Value) => {
    const { validation } = this.props
    let error: FieldError = getFormFieldError(value, validation)
    if (this.state.error !== error) {
      this.setState({ error }, () => {
        const { name } = this.props
        const { form } = this.context
        if (form) {
          form.dispatch(changeFieldError(name, error))
        }
      })
    }
  }

  onInitialize = () => {
    const { form } = this.context
    if (form) {
      const action = {
        type: actionTypes.INITIALIZE_FIELD,
        payload: { name },
      }
      form.dispatch(action)
    }
  }

  onTeardown = (name: string) => {
    const { form } = this.context
    if (form) {
      const action = {
        type: actionTypes.TEARDOWN_FIELD,
        payload: { name },
      }
      form.dispatch(action)
    }
  }

  onChangeValue = (value: Value) => {
    this.handleValidate(value)
    this.setState({ value }, () => {
      const { name } = this.props
      const { form } = this.context
      if (form) {
        const action = {
          type: actionTypes.CHANGE_FIELD_VALUE,
          payload: { name, value },
        }
        form.dispatch(action)
      }
    })
  }

  onFocus = () => {
    this.setState({ isFocusing: true }, () => {
      const { name } = this.props
      const { form } = this.context
      if (form) {
        const action = {
          type: actionTypes.FOCUS_FIELD,
          payload: { name },
        }
        form.dispatch(action)
      }
    })
  }

  onBlur = () => {
    this.setState({ isFocusing: false, isFocused: true }, () => {
      const { name } = this.props
      const { form } = this.context
      if (form) {
        const action = {
          type: actionTypes.BLUR_FIELD,
          payload: { name },
        }
        form.dispatch(action)
      }
    })
  }

  onSubscribeFormChanges = (
    oldFormState: FormState<Value>,
    newFormState: FormState<Value>,
  ) => {
    if (oldFormState.id !== newFormState.id) {
      const { initialValue } = this.props
      if (initialValue !== undefined) {
        this.onChangeValue(initialValue)
      }
    }
  }

  render() {
    const { children } = this.props
    if (!children) return null
    const field = {
      ...this.state,
      onChange: this.onChangeValue,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
    }
    return children(field)
  }
}

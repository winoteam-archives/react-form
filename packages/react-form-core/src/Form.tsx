import * as React from 'react'

import FormContext from './FormContext'
import * as actionTypes from './actionTypes'
import {
  FormProps,
  FormAction,
  FormState,
  FormFocusing,
  FormFocused,
} from './TypeDefinitions'

type Props<Values> = FormProps<Values>

type State<Values> = FormState<Values>

export default class Form<Values> extends React.Component<
  Props<Values>,
  State<Values>
> {
  subscribers: Function[] = []

  constructor(props: Props<Values>) {
    super(props)
    const { id } = props
    const initialValues = props.initialValues || ({} as Values)
    const values = {} as Values
    this.state = {
      id,
      initialValues,
      values,
      indexes: {},
      refs: {},
      errors: {},
      focused: {},
      focusing: {},
      isKilled: false,
      isProcessing: false,
      isSubmitting: false,
      submitCount: 0,
    }
  }

  componentWillReceiveProps(nextProps: Props<Values>) {
    if (this.props.id !== nextProps.id) {
      this.handleReset()
    }
  }

  componentDidUpdate() {
    for (let subscriber of this.subscribers) {
      subscriber(this.state)
    }
  }

  handleSubscribe = (fn: Function) => {
    this.subscribers.push(fn)
  }

  handleUnsubscribe = (fn: Function) => {
    this.subscribers.splice(this.subscribers.indexOf(fn), 1)
  }

  handleGetState = () => {
    return this.state
  }

  handleDispatch = (action: FormAction) => {
    switch (action.type) {
      // case actionTypes.INITIALIZE_FIELD: {
      //   const name = action.payload.name as string
      //   const value = action.payload.value as any
      //   const ref = action.payload.ref as React.ReactNode
      //   this.setState(prevState => ({
      //     initialValues: {
      //       ...prevState.initialValues,
      //       [name as string]: value,
      //     },
      //     values: {
      //       ...prevState.values,
      //       [name as string]: value,
      //     },
      //     indexes: {
      //       ...prevState.indexes,
      //       [name as string]: Object.keys(prevState.indexes).length,
      //     },
      //     refs: {
      //       ...prevState.refs,
      //       [name as string]: ref,
      //     },
      //   }))
      //   break
      // }
      case actionTypes.CHANGE_FIELD_VALUE: {
        const { name, value } = action.payload
        this.setState(prevState => ({
          values: {
            ...prevState.values,
            [name]: value,
          },
        }))
        break
      }
      case actionTypes.FOCUS_FIELD: {
        this.setState(prevState => ({
          focusing: {
            ...prevState.focusing,
            [name as keyof Values]: true,
          } as FormFocusing<Values>,
        }))
        break
      }
      case actionTypes.BLUR_FIELD: {
        const { name } = action.payload
        this.setState(prevState => ({
          focusing: {
            ...prevState.focusing,
            [name as keyof Values]: false,
          } as FormFocusing<Values>,
          focused: {
            ...prevState.focused,
            [name as keyof Values]: true,
          } as FormFocused<Values>,
        }))
        break
      }
      case actionTypes.RESET_FORM:
        break
      case actionTypes.SUBMIT_FORM_REQUEST:
        break
      default:
        break
    }
  }

  handleReset = () => {
    const action = {
      type: actionTypes.RESET_FORM,
      payload: {},
    }
    this.handleDispatch(action)
  }

  handleSubmit = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { onSubmit } = this.props
        this.handleDispatch({
          type: actionTypes.SUBMIT_FORM_REQUEST,
          payload: {},
        })
        const { values } = this.state
        const response = await onSubmit(values)
        this.handleDispatch({
          type: actionTypes.SUBMIT_FORM_SUCCESS,
          payload: {},
        })
        resolve(response)
      } catch (err) {
        this.handleDispatch({
          type: actionTypes.SUBMIT_FORM_FAILURE,
          payload: {},
        })
        reject(err)
      }
    })
  }

  renderChildren() {
    const { children } = this.props
    if (typeof children === 'function') {
      return children()
    }
    return children
  }

  render() {
    return (
      <FormContext.Provider
        value={{
          subscribe: this.handleSubscribe,
          unsubscribe: this.handleUnsubscribe,
          getState: this.handleGetState,
          dispatch: this.handleDispatch,
          reset: this.handleReset,
          submit: this.handleSubmit,
        }}
      >
        {this.renderChildren}
      </FormContext.Provider>
    )
  }
}

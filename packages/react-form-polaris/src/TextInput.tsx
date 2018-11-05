import * as React from 'react'
import { FormFieldState, FormFieldActions } from '@wino/react-form-core'
import { TextField, TextFieldProps } from '@shopify/polaris'

type Props = TextFieldProps & FormFieldState<string | number> & FormFieldActions

export type TextInputProps = Props

export default class TextInput extends React.Component<Props> {
  static defaultProps = { type: 'text' }

  handleChange = (value: string) => {
    const { name, onChange } = this.props
    const event = { target: { name, value } } as React.ChangeEvent<any>
    return onChange(event)
  }

  handleBlur = (e?: FocusEvent) => {
    const { onBlur } = this.props
    onBlur(e)
  }

  shouldComponentUpdate(nextProps: Props) {
    return (
      this.props.value !== nextProps.value ||
      this.props.error !== nextProps.error
    )
  }

  render() {
    console.log('render', this.props.name, this.props.value)
    return (
      <TextField
        {...this.props}
        error={this.props.error}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    )
  }
}

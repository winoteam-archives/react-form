import * as React from 'react'
import { FormFieldState, FormFieldHandlers } from '@wino/react-form-core'
import { TextField, TextFieldProps } from '@shopify/polaris'

type FieldValue = string | number

type Props = TextFieldProps &
  FormFieldState<FieldValue> &
  FormFieldHandlers<FieldValue>

export type TextInputProps = Props

export default class TextInput extends React.Component<Props> {
  static defaultProps = { type: 'text' }

  handleChange = (value: string) => {
    const { onChange } = this.props
    return onChange(value)
  }

  handleBlur = () => {
    const { onBlur } = this.props
    onBlur()
  }

  shouldComponentUpdate(nextProps: Props) {
    return (
      this.props.value !== nextProps.value ||
      this.props.error !== nextProps.error
    )
  }

  render() {
    return (
      <TextField
        {...this.props}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    )
  }
}

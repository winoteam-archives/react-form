import * as React from 'react'
import { FormField } from 'react-form-core'
import { TextField, TextFieldProps } from '@shopify/polaris'

type Props = TextFieldProps & FormField<string | number>

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
    return this.props.value !== nextProps.value
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

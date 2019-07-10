import * as React from 'react'
import { FormFieldState, FormFieldHandlers } from '@wino/react-form-core'
import { Select, SelectProps } from '@shopify/polaris'

type FieldValue = string | number

type Props = SelectProps &
  FormFieldState<FieldValue> &
  FormFieldHandlers<FieldValue>

export type SelectInputProps = Props

export default class SelectInput extends React.Component<Props> {
  handleChange = (value: string) => {
    const { onChange } = this.props
    return onChange(value)
  }

  shouldComponentUpdate(nextProps: Props) {
    return (
      this.props.value !== nextProps.value ||
      this.props.error !== nextProps.error
    )
  }

  render() {
    return (
      <Select
        {...this.props}
        onChange={this.handleChange}
        error={this.props.error}
      />
    )
  }
}

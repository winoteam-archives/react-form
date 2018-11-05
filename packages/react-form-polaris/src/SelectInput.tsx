import * as React from 'react'
import { FormFieldState, FormFieldActions } from '@wino/react-form-core'
import { Select, SelectProps } from '@shopify/polaris'

type Props = SelectProps & FormFieldState<string | number> & FormFieldActions

export type SelectInputProps = Props

export default class SelectInput extends React.Component<Props> {
  handleChange = (value: string) => {
    const { name, onChange } = this.props
    const event = { target: { name, value } } as React.ChangeEvent<any>
    return onChange(event)
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

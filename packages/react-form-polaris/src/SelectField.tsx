import * as React from 'react'
import { FormField, FormFieldProps } from '@wino/react-form-core'
import { SelectProps } from '@shopify/polaris'
import SelectInput, { SelectInputProps } from './SelectInput'

type Props = SelectProps & FormFieldProps<string | number>

export default class SelectField extends React.Component<Props> {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <FormField {...this.props}>
        {field => {
          const selectInputProps = {
            ...this.props,
            ...field,
          } as SelectInputProps
          return <SelectInput {...selectInputProps} />
        }}
      </FormField>
    )
  }
}

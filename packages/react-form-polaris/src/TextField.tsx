import * as React from 'react'
import { FormField, FormFieldProps } from '@wino/react-form-core'
import { BaseProps } from '@shopify/polaris/types/components/TextField/TextField'
import TextInput, { TextInputProps } from './TextInput'

type Props = BaseProps & FormFieldProps<string | number>

export default class TextField extends React.Component<Props> {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <FormField {...this.props}>
        {field => {
          const textInputProps = { ...this.props, ...field } as TextInputProps
          return <TextInput {...textInputProps} />
        }}
      </FormField>
    )
  }
}

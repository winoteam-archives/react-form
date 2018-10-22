import * as React from 'react'
import { FieldBuilder } from 'react-form-core'
import { BaseProps } from '@shopify/polaris/types/components/TextField/TextField'
import TextInput, { TextInputProps } from './TextInput'

type Props = BaseProps & {
  name: string
}

export default class TextField extends React.Component<Props> {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const { name } = this.props
    return (
      <FieldBuilder name={name}>
        {({ field }) => {
          const textInputProps = { ...this.props, ...field } as TextInputProps
          return <TextInput {...textInputProps} />
        }}
      </FieldBuilder>
    )
  }
}

import * as React from 'react'
import { FieldBuilder } from 'react-form-core'
import { SelectProps } from '@shopify/polaris'
import SelectInput, { SelectInputProps } from './SelectInput'

type Props = SelectProps & {
  name: string
}

export default class SelectField extends React.Component<Props> {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const { name } = this.props
    return (
      <FieldBuilder name={name}>
        {({ field }) => {
          const selectInputProps = {
            ...this.props,
            ...field,
          } as SelectInputProps
          return <SelectInput {...selectInputProps} />
        }}
      </FieldBuilder>
    )
  }
}

import * as React from 'react'
import { BaseProps } from '@shopify/polaris/types/components/TextField/TextField'
import TextField from './TextField'

type Props = BaseProps & {
  name: string
}

export default class NumberField extends React.Component<Props> {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return <TextField {...this.props} type="number" />
  }
}

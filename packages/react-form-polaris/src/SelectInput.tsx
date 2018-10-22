import * as React from 'react'
import { Select, SelectProps } from '@shopify/polaris'

type Props = SelectProps & {
  onChange: (e: React.ChangeEvent<any>) => void
  onBlur: (e: any) => void
  name: string
  value: string | number
}

export type SelectInputProps = Props

export default class SelectInput extends React.Component<Props> {
  handleChange = (value: string) => {
    const { name, onChange } = this.props
    const event = { target: { name, value } } as React.ChangeEvent<any>
    return onChange(event)
  }

  shouldComponentUpdate(nextProps: Props) {
    return this.props.value !== nextProps.value
  }

  render() {
    return <Select {...this.props} onChange={this.handleChange} />
  }
}

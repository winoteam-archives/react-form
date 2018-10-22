import * as React from 'react'
import { Field as FormikField, FieldProps } from 'formik'

interface Props {
  name: string
  children?: (props: FieldProps) => React.ReactNode
}

export default class Field extends React.Component<Props> {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return <FormikField {...this.props} />
  }
}

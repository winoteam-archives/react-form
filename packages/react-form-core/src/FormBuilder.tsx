import * as React from 'react'
import { Formik } from 'formik'
import { FormConfig } from './TypeDefinitions'

type Props = FormConfig & {
  children: React.ReactNode
}

export default class Form extends React.Component<Props> {
  render() {
    return <Formik {...this.props} />
  }
}

import * as React from 'react'
import { connect } from 'formik'
import { FormContext } from './TypeDefinitions'

interface Props {
  children: (formik: FormContext) => React.ReactNode
}

interface PropsWithConnect extends Props {
  formik: FormContext
}

class FormConsumer extends React.Component<PropsWithConnect> {
  render() {
    const { children, formik } = this.props
    if (!formik) return null
    return children(formik)
  }
}

export default connect<Props>(FormConsumer)

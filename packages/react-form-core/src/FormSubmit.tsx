import * as React from 'react'
import { connect, FormikContext, FormikValues } from 'formik'
import {
  FormValues,
  FormSubmitState,
  FormSubmitActions,
} from './TypeDefinitions'

type Formik = FormikContext<FormikValues>

type Props = {
  children: (formSubmit: FormSubmitState & FormSubmitActions) => React.ReactNode
}

class FormSubmit extends React.Component<Props & { formik: Formik }> {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const { children, formik } = this.props
    const handleSubmit = formik.handleSubmit as (values: FormValues) => void
    const formSubmit = { handleSubmit, disabled: true }
    return children(formSubmit)
  }
}

export default connect<Props>(FormSubmit)

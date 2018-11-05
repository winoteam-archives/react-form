import * as React from 'react'
import { connect, FormikContext, FormikValues } from 'formik'
import shallowEqual from 'fbjs/lib/shallowEqual'
import { FormState, FormValues } from './TypeDefinitions'

type Formik = FormikContext<FormikValues>

type Props = {
  children: (formState: FormState<FormValues>) => React.ReactNode
}

class FormConsumer extends React.Component<Props & { formik: Formik }> {
  shouldComponentUpdate(nextProps: { formik: Formik }) {
    const { formik } = this.props
    const { formik: nextFormik } = nextProps
    return (
      !shallowEqual(formik.values, nextFormik.values) ||
      !shallowEqual(formik.errors, nextFormik.errors) ||
      !shallowEqual(formik.touched, nextFormik.touched) ||
      formik.isSubmitting !== nextFormik.isSubmitting ||
      formik.submitCount !== nextFormik.submitCount
    )
  }

  render() {
    const { children, formik } = this.props
    if (!formik) return null
    const { errors, touched, isSubmitting, submitCount } = formik
    const values = formik.values as FormValues
    const formState = {
      values,
      errors,
      touched,
      isSubmitting,
      submitCount,
    }
    return children(formState)
  }
}

export default connect<Props>(FormConsumer)

import * as React from 'react'
import { Formik, FormikConfig, FormikValues } from 'formik'
import { FormProps } from './TypeDefinitions'

type Props = FormProps & {
  children: React.ReactNode
}

export default function Form(props: Props) {
  const formikProps = props as FormikConfig<FormikValues>
  const initialValues = props.initialValues || {}
  return <Formik {...formikProps} initialValues={initialValues} />
}

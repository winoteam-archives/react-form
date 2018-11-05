import * as React from 'react'
import { connect, FormikContext, FormikValues } from 'formik'
import memoize from 'fast-memoize'
import { REQUIRED_VALIDATION_RULE } from './constants'
import {
  getFormFieldValue,
  getFormFieldInitialValue,
  getFormFieldError,
  getFormFieldTouched,
  isFormFieldValueDefined,
} from './utils'
import {
  FormFieldState,
  FormFieldActions,
  FormFieldProps,
  FieldError,
} from './TypeDefinitions'

type Props = FormFieldProps<any> & {
  children?: (props: FormFieldState<any> & FormFieldActions) => React.ReactNode
}

type Formik = FormikContext<FormikValues>

class FormField extends React.Component<Props & { formik: Formik }> {
  componentDidMount() {
    const { formik, name, initialValue } = this.props
    const { initialValues } = formik
    const fieldInstance = { props: { validate: this.validate } }
    formik.registerField(name, fieldInstance as any)
    const formValue = getFormFieldValue(name, initialValues)
    const value = getFormFieldInitialValue(name, initialValues, initialValue)
    if (formValue !== value) {
      const event = { target: { name, value } } as React.ChangeEvent<any>
      formik.handleChange(event)
    }
  }

  componentDidUpdate(prevProps: Props & { formik: Formik }) {
    const { name, formik } = this.props
    if (prevProps.name !== name) {
      formik.unregisterField(prevProps.name)
      const fieldInstance = { props: { validate: this.validate } }
      formik.registerField(name, fieldInstance as any)
    }
    if (prevProps.value !== this.props.value) {
      const values: { [key: string]: any } = formik.values
      if (values[name] !== this.props.value) {
        formik.setFieldValue(name, this.props.value)
      }
    }
  }

  componentWillUnmount() {
    const { formik, name } = this.props
    formik.unregisterField(name)
  }

  validate = memoize((value: any) => {
    const { validation } = this.props
    if (validation) {
      if (value !== null && value !== undefined) {
        let response: FieldError = undefined
        for (let key of Object.keys(validation)) {
          if (
            key === REQUIRED_VALIDATION_RULE ||
            (key !== REQUIRED_VALIDATION_RULE && isFormFieldValueDefined(value))
          ) {
            const rule = validation[key]
            response = rule(value)
            if (response) {
              break
            }
          }
        }
        return response
      }
    }
    return null
  })

  shouldComponentUpdate(nextProps: Props & { formik: Formik }) {
    const { formik } = this.props
    const { name, formik: nextFormik } = nextProps
    const value = getFormFieldValue(name, this.props.formik.values)
    const nextValue = getFormFieldValue(name, nextFormik.values)
    const error = getFormFieldError(name, this.props.formik.errors, formik)
    const nextError = getFormFieldError(name, nextFormik.errors, nextFormik)
    return (
      this.props.value !== nextProps.value ||
      value !== nextValue ||
      error !== nextError
    )
  }

  render() {
    const { formik, name, children } = this.props
    if (!children) return null
    const onChange = formik.handleChange
    const onBlur = formik.handleBlur
    const value = getFormFieldValue(name, formik.values)
    const error = getFormFieldError(name, formik.errors, formik)
    const touched = getFormFieldTouched(name, formik.touched)
    const field = { name, value, error, touched, onChange, onBlur }
    return children(field)
  }
}

export default connect<Props>(FormField)

import {
  FormValues,
  FormErrors,
  FormTouched,
  FormState,
} from './TypeDefinitions'

export function getFormFieldValue(name: string, values: FormValues) {
  const value = values[name]
  if (!isFormFieldValueDefined(value)) {
    return undefined
  }
  return value
}

export function getFormFieldInitialValue(
  name: string,
  initialValues: FormValues,
  initialValue?: any,
) {
  return getFormFieldValue(name, initialValues) || initialValue || ''
}

export function getFormFieldError(
  name: string,
  errors: FormErrors<FormValues>,
  formState?: FormState<FormValues>,
) {
  const error = errors[name]
  if (error && typeof error === 'string') {
    if (formState) {
      return error
    } else {
      return error
    }
  }
  return undefined
}

export function getFormFieldTouched(
  name: string,
  touched: FormTouched<FormValues>,
) {
  return !!touched[name]
}

export function isFormFieldValueDefined(value: any) {
  if (
    value === undefined ||
    value === null ||
    (typeof value === 'string' && value.length === 0)
  ) {
    return false
  }
  return true
}

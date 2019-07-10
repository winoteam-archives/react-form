import { REQUIRED_VALIDATION_RULE } from './constants'

export function isFormFieldValueDefined(value: any) {
  return (
    value !== undefined &&
    value !== null &&
    (typeof value !== 'string' || value.length === 0)
  )
}

export function getFormFieldValue<FormValues>(
  name: string,
  values: FormValues,
) {
  const value = values[name]
  if (!isFormFieldValueDefined(value)) {
    return undefined
  }
  return value
}

export function getFormFieldError(value: any, validation) {
  let error = undefined
  if (validation) {
    for (let key in validation) {
      if (
        key === REQUIRED_VALIDATION_RULE ||
        (key !== REQUIRED_VALIDATION_RULE && isFormFieldValueDefined(value))
      ) {
        const rule = validation[key]
        error = rule(value)
        if (error) {
          break
        }
      }
    }
  }
  return error
}

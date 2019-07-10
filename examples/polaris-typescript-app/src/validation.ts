import { createValidationRule } from '@wino/form-validation'
import { t } from './translation'

const rules = {
  isRequired(value: any): boolean {
    return (
      value !== '' &&
      value !== undefined &&
      value !== null &&
      !(Array.isArray(value) && !value.length)
    )
  },
  isInteger(value: any): boolean {
    return value == parseInt(value, 10)
  },
}

export const isRequired = createValidationRule(
  rules.isRequired,
  t('This field is required'),
)

export const isInteger = createValidationRule(
  rules.isInteger,
  t('This field must be an integer'),
)

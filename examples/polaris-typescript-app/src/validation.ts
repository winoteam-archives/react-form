import { rules, createValidationRule } from 'form-validation'
import { t } from './translation'

export const isRequired = createValidationRule(
  rules.isRequired,
  t('This field is required'),
)

export const isEmail = createValidationRule(
  rules.isEmail,
  t('This field must be an integer'),
)

export const isOneOf = createValidationRule(
  rules.isOneOf,
  t('The value selected is invalid'),
)

export const isInteger = createValidationRule(
  rules.isInteger,
  t('This field must be an integer'),
)
